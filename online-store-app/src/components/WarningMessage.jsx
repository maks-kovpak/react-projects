import { Modal, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

function WarningMessage({ openModal, setOpenModal }) {
  const navigate = useNavigate();

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
      <Modal.Body className='flex justify-center'>
        <h1 className='text-3xl font-bold'>Something went wrong! Try again</h1>
      </Modal.Body>
      <Modal.Footer className='flex justify-center'>
        <Button onClick={() => setOpenModal(false)}>Ok</Button>
        <Button
          color='gray'
          onClick={() => {
            setOpenModal(false);
            navigate('/');
          }}
        >
          Go to home
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default WarningMessage;
