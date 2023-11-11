import { useEffect, useState } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo';
import { v4 as uuidv4 } from 'uuid';

const initialTodos = JSON.parse(localStorage.getItem('todos')) ?? [
  {
    id: uuidv4(),
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: uuidv4(),
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: uuidv4(),
    title: 'Deploy to live server',
    completed: false,
  },
];

function TodoContainer() {
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleChange = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div className='container'>
      <Header />
      <InputTodo addTodoProps={addTodo} />
      <TodoList todos={todos} handleChangeProps={handleChange} deleteTodoProps={deleteTodo} />
    </div>
  );
}

export default TodoContainer;
