import { useEffect, useState } from 'react';

import { ITodoComponent } from './Todo.types';
import api from '../../services';
import { ITodo } from '../../shared/ts';

const Todo = ({ id, title, status, onTodoChange }: ITodoComponent ): JSX.Element | null => {
  const [isDone, setIsDone] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const todoId = `todo_${id}`;
  const handleOptimisticIsDoneChange = async () => {
    setIsDone(!isDone);
    try {
      const data = await api.patchTodo<ITodo>(id, Number(!isDone));
      setIsDone(!!data.status);
      onTodoChange();
    } catch (error) {
      setIsDone(isDone);
      console.error(error);
    }
  };
  const handleOptimisticDelete = async () => {
    setIsDeleted(true);
    try {
      await api.deleteTodo(id);
      setIsDeleted(true);
      onTodoChange();
    } catch (error) {
      setIsDeleted(false);
      console.error(error);
    }
  };

  useEffect(() => {
    setIsDone(!!status);
  }, [status]);

  if (isDeleted) {
    return null;
  }

  return (
    <li className='[&:not(:last-child)]:mb-4'>
      <input
        type='checkbox'
        className={`
          appearance-none
          [&:checked+label]:text-gray-500
          [&:checked+label]:line-through
          [&:checked+label]:after:opacity-100
        `}
        checked={isDone}
        id={todoId}
        name={todoId}
        onChange={handleOptimisticIsDoneChange}
      />
      <label
        className={`
          relative
          pl-10
          inline-flex
          overflow-hidden
          cursor-pointer
          font-bold
          text-lg
          before:absolute
          before:top-0
          before:left-0
          before:content
          before:w-[28px]
          before:h-[28px]
          before:rounded-full
          before:border-[3px]
          before:border-black
          before:font-bold
          before:text-2xl
          before:text-center
          after:absolute
          after:top-[10px]
          after:left-2
          after:content
          after:w-[13px]
          after:h-[7px]
          after:border-black
          after:border-b-[3px]
          after:border-l-[3px]
          after:-rotate-45
          after:opacity-0
          after:transition-opacity
          after:ease-in-out
        `}
        htmlFor={todoId}
      >
        {title}
      </label>
      <button
        className='appearance-none ml-10 flex'
        title='delete todo'
        onClick={handleOptimisticDelete}
      >
        [delete]
      </button>
    </li>
  );
};

export default Todo;
