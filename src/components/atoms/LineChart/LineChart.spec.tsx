import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import LineChart from './LineChart';
describe('<LineChart />', () => {
  it('matches snapshot', () => {
    const { container } = render(<LineChart />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<LineChart />);
    getByText('');
  });
});

