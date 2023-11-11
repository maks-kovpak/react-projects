function TodoItem({ todo, ...props }) {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#d35e0f',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className='todo-item'>
      <input type='checkbox' checked={todo.completed} onChange={() => props.handleChangeProps(todo.id)} />
      <button onClick={() => props.deleteTodoProps(todo.id)}>Delete</button>
      <span style={todo.completed ? completedStyle : null}>{todo.title}</span>
    </li>
  );
}

export default TodoItem;
