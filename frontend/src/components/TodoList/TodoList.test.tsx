import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import TodoList from './TodoList';

describe('TodoList component', () => {
  it('should render `no todos so far!` message if no items are passed in', () => {
    const mockProps = {
      data: [],
      onTodoChange: () => null,
    };
    const wrapper = render(<TodoList {...mockProps} />);
    const noItemsMessage = wrapper.getByTestId('TodoList-NoItemsMessage');
    const items = wrapper.queryByTestId('TodoList-Items');

    expect(wrapper).toBeTruthy();
    expect(noItemsMessage).toBeTruthy();
    expect(items).toBeFalsy();
  });

  it('should render some <Todo /> items if proper data is passed in', () => {
    const mockProps = {
      data: [
        {
          id: 1,
          title: 'Lorem Ipsum Title',
          description: 'Lorem Ipsum Description',
          status: 0,
        },
        {
          id: 2,
          title: 'The Quick Brown Fox Title',
          description: 'The Quick Brown Fox Description',
          status: 1,
        },
      ],
      onTodoChange: () => null,
    };
    const wrapper = render(<TodoList {...mockProps} />);
    const noItemsMessage = wrapper.queryByTestId('TodoList-NoItemsMessage');
    const items = wrapper.getByTestId('TodoList-Items');

    expect(wrapper).toBeTruthy();
    expect(noItemsMessage).toBeFalsy();
    expect(items).toBeTruthy();
    expect(items.childNodes).toHaveLength(2);
  });
});
