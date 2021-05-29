import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import LoginTemplate from './LoginTemplate';
describe('<LoginTemplate />', () => {
  it('matches snapshot', () => {
    const { container } = render(<LoginTemplate />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<LoginTemplate />);
    getByText('');
  });
});

