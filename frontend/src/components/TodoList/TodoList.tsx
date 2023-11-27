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
    return (
      <span
        className='text-black dark:text-white'
        data-testid='TodoList-NoItemsMessage'
      >
        no todos so far!
      </span>
    );
  }

  return (
    <ul className='max-w-2xl min-w-[70%]' data-testid='TodoList-Items'>
      {data.map((item: ITodo) => (
        <Todo key={item.id} {...item} onTodoChange={onTodoChange} />
      ))}
    </ul>
  );
};

export default TodoList;
