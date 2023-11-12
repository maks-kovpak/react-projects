import { Navbar } from 'flowbite-react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <Navbar className='py-4 sm:px-8' fluid rounded>
      <Navbar.Brand as={NavLink} to='/'>
        <span className='self-center whitespace-nowrap text-3xl font-semibold dark:text-white'>Online Store</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to='/' className='text-xl'>
          Home
        </Navbar.Link>
        <Navbar.Link as={NavLink} to='products' className='text-xl'>
          Products
        </Navbar.Link>
        {user.registered ? (
          <Navbar.Link as={NavLink} to='profile' className='text-xl'>
            Profile
          </Navbar.Link>
        ) : (
          <Navbar.Link as={NavLink} to='login' className='text-xl'>
            Login
          </Navbar.Link>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
