import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import InputTodo from './components/InputTodo/InputTodo';
import './App.css';

interface Todo {
  id: number;
  nameTask: string;
  description: string,
  day: string,
  priority: string,
  level: string,
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (nameTask: string, description: string, day: string, priority: string, level: string) => {
    const newTodo: Todo = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      nameTask,
      description,
      day,
      priority,
      level,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <InputTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
    </div>
  );
};

export default App;