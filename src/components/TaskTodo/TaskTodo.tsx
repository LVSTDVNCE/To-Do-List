import React from 'react';
import { Todo } from '../../types/types';
import './TaskTodo.css';

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

  var displayNone: string;
  (todo.day === '') ? displayNone = 'none' : displayNone = 'flex';

  var color:string;
  (todo.priority === 'High') ? color = '#E42C5F' : (todo.priority === 'Medium') ? color = '#F9D100' : color = '#2D41A7';

  return (
    <div className='TaskTodo'>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
        className='TaskTodo__input'
      />
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='TaskTodo__name'>
        {todo.nameTask}
      </div>
      <div style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} className='TaskTodo__description'>
        {todo.description}
      </div>
      <div className='InputTodo__day-PL'>
        <div style={{ backgroundColor: color, display: displayNone }} className='TaskTodo__day'>
          {truncate(todo.day, 4)}
        </div>
        <div style={{ textDecoration: todo.completed ? 'line-through' : 'none', display:'flex' }} className='TaskTodo__PL'>
          <div  className='PL_item' style={{ backgroundColor: color }}></div>
          <div  className='PL_item' style={{ backgroundColor: (todo.level === 'Easy') ? '#D9D9D9' : (todo.level === 'Moderate') ? color : color }}></div>
          <div  className='PL_item' style={{ backgroundColor: (todo.level === 'Easy') ? '#D9D9D9' : (todo.level === 'Hard') ? color : '#D9D9D9' }}></div>
        </div>
      </div>
      <button onClick={() => removeTodo(todo.id)} className='TaskTodo__button'>Remove</button>
    </div>
  );
};

export default TaskTodo;