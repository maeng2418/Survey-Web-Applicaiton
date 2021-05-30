import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Pwl from './Pwl';
describe('<Pwl />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Pwl />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<Pwl />);
    getByText('');
  });
});
