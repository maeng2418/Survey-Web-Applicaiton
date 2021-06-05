import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import DeleteQuestionBtn from './DeleteQuestionBtn';
describe('<DeleteQuestionBtn />', () => {
  it('matches snapshot', () => {
    const { container } = render(<DeleteQuestionBtn />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<DeleteQuestionBtn />);
    getByText('');
  });
});
