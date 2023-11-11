import { useState } from 'react';

function InputTodo(props) {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(title);
    setTitle('');
  };

  return (
    <form action='get' onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        className='input-text'
        placeholder='Add todo...'
        value={title}
        name='title'
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type='submit' className='input-submit' value='Submit' />
    </form>
  );
}

export default InputTodo;
