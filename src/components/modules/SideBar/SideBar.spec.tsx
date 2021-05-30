import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SideBar from './SideBar';
describe('<SideBar />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SideBar />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SideBar />);
    getByText('');
  });
});
