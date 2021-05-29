import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
describe('<LoginForm />', () => {
  it('matches snapshot', () => {
    const { container } = render(<LoginForm />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<LoginForm />);
    getByText('');
  });
});

