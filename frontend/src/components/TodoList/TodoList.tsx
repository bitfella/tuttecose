import Todo from '../Todo';
import { ITodo } from '../../shared/ts';

const TodoList = ({ data }: { data: ITodo[]}): JSX.Element | null => {
  if (!data.length) return null;

  return (
    <ul className='max-w-2xl'>
      {data.map((item: ITodo) => (
        <Todo key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default TodoList;
