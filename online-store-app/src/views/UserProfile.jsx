import { Button } from 'flowbite-react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

function UserProfile() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <section className='flex flex-col sm:flex-row justify-between gap-8 max-w-3xl m-auto shadow-lg p-4 rounded-lg'>
      <img src={user.avatar} className='rounded-lg shadow-lg' alt='' />
      <div className='flex flex-col items-start justify-between flex-grow gap-4'>
        <div className='flex flex-col'>
          <h5 className='mb-1 text-3xl font-medium text-gray-900 dark:text-white'>{user.name}</h5>
          <span className='text-xl text-gray-500 dark:text-gray-400'>
            Role: {user.role[0].toUpperCase() + user.role.slice(1)}
          </span>
          <span className='text-xl text-gray-500 dark:text-gray-400'>Email: {user.email}</span>
          <span className='text-xl text-gray-900 dark:text-gray-500'>
            Registered on {new Date(Date.parse(user.creationAt)).toLocaleDateString()}
          </span>
        </div>

        <Button
          color='failure'
          onClick={() => {
            setUser({ registered: false });
            navigate('/');
          }}
        >
          Log out
        </Button>
      </div>
    </section>
  );
}

export default UserProfile;
