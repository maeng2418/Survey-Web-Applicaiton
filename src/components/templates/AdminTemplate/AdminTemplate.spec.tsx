import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AdminTemplate from './AdminTemplate';
describe('<AdminTemplate />', () => {
  it('matches snapshot', () => {
    const { container } = render(<AdminTemplate />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<AdminTemplate />);
    getByText('');
  });
});

