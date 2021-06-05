import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import GraphSelect from './GraphSelect';
describe('<GraphSelect />', () => {
  it('matches snapshot', () => {
    const { container } = render(<GraphSelect />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<GraphSelect />);
    getByText('');
  });
});
