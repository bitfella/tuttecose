import { useEffect, useState } from 'react';

import { ITodoComponent } from './Todo.types';
import api from '../../services';
import { ITodo } from '../../shared/ts';

const Todo = ({
  id,
  title,
  status,
  onTodoChange,
}: ITodoComponent): JSX.Element | null => {
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
          [&:checked+span>label]:text-gray-400
          [&:checked+span>label]:line-through
          [&:checked+span>label]:after:opacity-100
        `}
        checked={isDone}
        id={todoId}
        name={todoId}
        onChange={handleOptimisticIsDoneChange}
      />
      <span className={`inline-flex pl-10`}>
        <label
          className={`
            relative
            cursor-pointer
            font-bold
            text-black
            dark:text-white
            text-lg
            before:absolute
            before:top-0
            before:-left-[40px]
            before:content
            before:w-[28px]
            before:h-[28px]
            before:rounded-full
            before:border-[3px]
            before:border-black
            dark:before:border-white
            before:font-bold
            before:text-2xl
            before:text-center
            after:absolute
            after:top-[10px]
            after:-left-8
            after:content
            after:w-[13px]
            after:h-[7px]
            after:border-black
            dark:after:border-white
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
          <button
            className={`
              appearance-none
              inline-flex
              ml-2
              text-black
              dark:text-white
              before:content-['+']
              before:rotate-45
              before:hover:text-red-600
            `}
            title='delete todo'
            onClick={handleOptimisticDelete}
          />
        </label>
      </span>
    </li>
  );
};

export default Todo;
