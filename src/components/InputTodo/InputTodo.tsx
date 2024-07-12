import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import  Select  from '../Select/Select';

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

const days = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register('nameTask')}/>
      <input type="text" {...register('description')}/>
      <Select {...register('day')} options={days}/>
      <Select {...register('priority')} options={priority}/>
      <Select {...register('level')} options={level}/>
      <button>Add Todo</button>
    </form>
  );
};

export default InputTodo;


      //<select {...register('day')}>
      //  {days.map((value) => (
      //    <option value={value}>{value}</option>
      //  ))}
      //</select>
      //<select {...register('priority')}>
      //  {priority.map((value) => (
      //    <option value={value}>{value}</option>
      //  ))}
      //</select>
      //<select {...register('level')}>
      //  {level.map((value) => (
      //    <option value={value}>{value}</option>
      //  ))}
      //</select>