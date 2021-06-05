import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Headline from './Headline';
describe('<Headline />', () => {
  it('matches snapshot', () => {
    const { container } = render(<Headline />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<Headline />);
    getByText('');
  });
});
