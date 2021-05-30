import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import DashboardTemplate from './DashboardTemplate';
describe('<DashboardTemplate />', () => {
  it('matches snapshot', () => {
    const { container } = render(<DashboardTemplate />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<DashboardTemplate />);
    getByText('');
  });
});

