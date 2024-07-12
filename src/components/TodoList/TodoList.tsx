import React from 'react';
import TaskTodo from '../TaskTodo/TaskTodo';
import { Todo } from '../../types/types';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {todos.map(todo => (
        <TaskTodo 
          key={todo.id} 
          todo={todo}
          toggleComplete={toggleComplete} 
          removeTodo={removeTodo} 
        />
      ))}
    </div>
  );
};

export default TodoList;