import React from 'react';
import { Todo } from '../../types/types';

interface TaskTodoProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TaskTodo: React.FC<TaskTodoProps> = ({ todo, toggleComplete, removeTodo }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.nameTask}
      </div>
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.description}
      </div>
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.day}
      </div>
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.priority}
      </div>
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.level}
      </div>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TaskTodo;