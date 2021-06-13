import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import BarChart from './BarChart';
describe('<BarChart />', () => {
  it('matches snapshot', () => {
    const { container } = render(<BarChart />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<BarChart />);
    getByText('');
  });
});
