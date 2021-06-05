import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AnswerTypeSelect from './AnswerTypeSelect';
describe('<AnswerTypeSelect />', () => {
  it('matches snapshot', () => {
    const { container } = render(<AnswerTypeSelect />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<AnswerTypeSelect />);
    getByText('');
  });
});
