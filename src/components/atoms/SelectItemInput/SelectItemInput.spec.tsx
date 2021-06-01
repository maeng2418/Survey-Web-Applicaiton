import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SelectItemInput from './SelectItemInput';
describe('<SelectItemInput />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SelectItemInput />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SelectItemInput />);
    getByText('');
  });
});
