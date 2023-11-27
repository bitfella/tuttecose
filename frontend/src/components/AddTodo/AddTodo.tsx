import { useRef } from 'react';

import api from '../../services';

const AddTodo = ({ onTodoAdd }: { onTodoAdd: () => void }): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleAddTodo = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    const title = (event.target as HTMLInputElement).value.trim();

    if (event.code === 'Enter' && title) {
      try {
        await api.addTodo(title);
        onTodoAdd();
        if (inputRef.current) inputRef.current.value = '';
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <nav className={`
      fixed
      left-0
      right-0
      bottom-0
      z-10
      flex
      justify-center
      py-4
      bg-white
      dark:bg-black
    `}>
      <input
        type='text'
        className={`
          appearance-none
          min-w-[350px]
          py-1
          bg-white
          dark:bg-black
          border-transparent
          border-b-2
          border-b-gray-400
          text-black
          dark:text-white
          placeholder:text-gray-400
          focus:outline-none
          focus:border-b-black
          dark:focus:border-b-white
        `}
        placeholder='type here a new todo and press enter'
        ref={inputRef}
        onKeyDown={handleAddTodo}
      />
    </nav>
  );
}

export default AddTodo;
