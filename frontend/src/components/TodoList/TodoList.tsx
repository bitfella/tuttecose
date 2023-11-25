import Todo from '../Todo';
import { ITodo } from '../../shared/ts';

const TodoList = ({
  data,
  onTodoChange,
}: {
  data: ITodo[];
  onTodoChange: () => void;
}): JSX.Element => {
  if (!data.length) {
    return <span>no todos so far!</span>;
  }

  return (
    <ul className='max-w-2xl'>
      {data.map((item: ITodo) => (
        <Todo key={item.id} {...item} onTodoChange={onTodoChange} />
      ))}
    </ul>
  );
};

export default TodoList;
