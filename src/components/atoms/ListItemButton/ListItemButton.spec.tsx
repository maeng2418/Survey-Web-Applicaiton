import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import ListItemButton from './ListItemButton';
describe('<ListItemButton />', () => {
  it('matches snapshot', () => {
    const { container } = render(<ListItemButton />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<ListItemButton />);
    getByText('');
  });
});
