import TodoItem from './TodoItem';

function TodoList({ todos, ...props }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}
    </div>
  );
}

export default TodoList;
