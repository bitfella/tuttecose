import { useEffect, useState } from 'react';

import Todo from '../Todo';
import api from '../../services';
import { ITodo } from '../../shared/ts';

const TodoList = (): JSX.Element | null => {
  const [data, setData] = useState<ITodo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getTodos<ITodo[]>();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <ul className='px-3'>
      {data.map((item: ITodo) => (
        <Todo key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
