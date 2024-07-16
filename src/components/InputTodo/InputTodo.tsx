import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './InputTodo.css';

interface InputTodoProps {
  addTodo: (nameTask: string, description: string, day: string, priority: string, level: string) => void;
}

interface IForm {
  nameTask: string,
  description: string,
  day: string,
  priority: string,
  level: string,
}

const days = ['', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const priority = ['High', 'Medium', 'Low'];
const level = ['Easy', 'Moderate', 'Hard'];

const InputTodo: React.FC<InputTodoProps> = ({ addTodo }) => {

  const { register, handleSubmit } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = data => {
    console.log(data)
    if(data.nameTask.trim() && data.description.trim()) {
      addTodo(data.nameTask, data.description, data.day, data.priority, data.level);
    }
  };

  return (
    <div className='InputTodo'>
      <form onSubmit={handleSubmit(onSubmit)} className='InputTodo__form'>
        <input type="text" {...register('nameTask')} className='InputTodo__input'/>
        <input type="text" {...register('description')} className='InputTodo__input'/>
        <select {...register('day')} className='InputTodo__select'>
          {days.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <select {...register('priority')} className='InputTodo__select'>
          {priority.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <select {...register('level')} className='InputTodo__select'>
          {level.map((value) => (
            <option value={value}>{value}</option>
          ))}
        </select>
        <button className='InputTodo__button'>Add Todo</button>
      </form>
    </div>
  );
};

export default InputTodo;