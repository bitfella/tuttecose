import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import ProgressBar from './ProgressBar';

describe('ProgressBar component', () => {
  it('should render a proper progress bar with expected props', () => {
    const mockProps = {
      completed: 10,
      total: 30,
    };
    const wrapper = render(<ProgressBar {...mockProps} />);
    const gfx = wrapper.getByTestId('ProgressBar-Gfx');
    const styles = getComputedStyle(gfx);

    expect(gfx).toBeTruthy();
    expect(styles.width).toBe('33%');
  });

  it('should render a proper progress text with expected props', () => {
    const mockProps = {
      completed: 1,
      total: 10,
    };
    const wrapper = render(<ProgressBar {...mockProps} />);
    const text = wrapper.getByTestId('ProgressBar-Text');

    expect(text).toBeTruthy();
    expect(text.textContent).toBe('completed: 10% (1/10)');
  });
});
