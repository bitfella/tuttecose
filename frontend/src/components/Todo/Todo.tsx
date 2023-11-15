import { useEffect, useState } from 'react';

import api from '../../services';
import { ITodo } from '../../shared/ts';

const Todo = ({ id, title, status }: ITodo): JSX.Element | null => {
  const [isDone, setIsDone] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const todoId = `todo_${id}`;
  const handleOptimisticIsDoneChange = async () => {
    setIsDone(!isDone);
    try {
      const data = await api.patchTodo<ITodo>(id, Number(!isDone));
      setIsDone(!!data.status);
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
    <li className="mb-4">
      <input
        type="checkbox"
        checked={isDone}
        id={todoId}
        name={todoId}
        onChange={handleOptimisticIsDoneChange}
      />
      <label htmlFor={todoId}>{title}</label>
      <button onClick={handleOptimisticDelete}>delete</button>
    </li>
  );
};

export default Todo;
