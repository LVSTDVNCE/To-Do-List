import React from 'react';
import { Todo } from '../../types/types';

interface TaskTodoProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TaskTodo: React.FC<TaskTodoProps> = ({ todo, toggleComplete, removeTodo }) => {
  
  function truncate(str:string, maxlength:number) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) : str;
  }

  var color:string;
  (todo.priority === 'High') ? color = '#E42C5F' : (todo.priority === 'Medium') ? color = '#F9D100' : color = '#2D41A7';

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
        {truncate(todo.day, 4)}
      </div>
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none', display:'flex' }}>
        <div style={{ width:20, height:20, backgroundColor: color, marginRight:10 }}></div>
        <div style={{ width:20, height:20, backgroundColor: (todo.level === 'Easy') ? '#D9D9D9' : (todo.level === 'Moderate') ? color : color, marginRight:10 }}></div>
        <div style={{ width:20, height:20, backgroundColor: (todo.level === 'Easy') ? '#D9D9D9' : (todo.level === 'Hard') ? color : '#D9D9D9' }}></div>
      </div>
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
    </div>
  );
};

export default TaskTodo;