import { useEffect, useState } from 'react';

import AddTodo from '../../components/AddTodo';
import ProgressBar from '../../components/ProgressBar';
import TodoList from '../../components/TodoList';
import api from '../../services';
import { ITodo } from '../../shared/ts';

const App = (): JSX.Element => {
  const [data, setData] = useState<ITodo[]>([]);
  const fetchData = async () => {
    try {
      const data = await api.getTodos<ITodo[]>();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className={`
      flex
      flex-col
      items-center
      justify-center
      min-h-[100dvh]
      px-8
      py-16
      font-mono
    `}>
      <ProgressBar
        completed={data.filter((item) => item.status === 1).length}
        total={data.length}
      />
      <TodoList data={data} onTodoChange={fetchData} />
      <AddTodo onTodoAdd={fetchData} />
    </main>
  );
}

export default App;
