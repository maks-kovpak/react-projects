import { Button, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import WarningMessage from '../components/WarningMessage';

function LoginForm() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const fields = e.target.elements;

    axios.get(`${process.env.PUBLIC_URL}/assets/users.json`).then((response) => {
      const current = response.data.filter((item) => {
        return item.email === fields.email.value && item.password === fields.password.value;
      })[0];

      if (!current) {
        setOpenModal(true);
        return;
      }

      setUser({
        ...current,
        registered: true,
      });

      navigate('/profile');
    });
  };

  return (
    <>
      <form className='flex max-w-md flex-col gap-4 m-auto mt-20' onSubmit={submitForm}>
        <h1 className='text-3xl font-bold'>Login to your account</h1>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='email' value='Your email' />
          </div>
          <TextInput id='email' type='email' placeholder='admin@example.com' required />
        </div>
        <div>
          <div className='mb-2 block'>
            <Label htmlFor='password' value='Your password' />
          </div>
          <TextInput id='password' type='password' required />
        </div>

        <Button type='submit'>Submit</Button>
      </form>

      <WarningMessage openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}

export default LoginForm;
