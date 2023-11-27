import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import App from './App';

describe('App component', () => {
  it('should render properly', () => {
    const wrapper = render(<App />);

    expect(wrapper).toBeTruthy();
  });
});
