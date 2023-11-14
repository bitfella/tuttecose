import { ITodo } from '.';

const Todo = ({ id, title, content }: ITodo): JSX.Element => {
  const todoId = `todo_${id}`

  return (
    <li className='mb-4'>
      <input type='checkbox' name={todoId} id={todoId} />
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  )
};

export default Todo;
