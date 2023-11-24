import { ITodo } from '../../shared/ts';

export interface ITodoComponent extends ITodo {
  onTodoChange: () => void;
}
