import { useEffect, useState } from 'react';

import Todo, { ITodo } from '../Todo'

const TodoList = (): JSX.Element | null => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (
        await fetch('http://tuttecose.loc/api/todos')
      ).json();

      setData(data);
    };

    fetchData();
  }, []);

  if (!data) return null;

  return (
    <ul className='px-3'>
      {
        data.map((item: ITodo) => <Todo key={item.id} {...item} />)
      }
    </ul>
  )
}

export default TodoList;
