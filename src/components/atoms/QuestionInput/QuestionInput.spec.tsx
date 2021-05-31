import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import QuestionInput from './QuestionInput';
describe('<QuestionInput />', () => {
  it('matches snapshot', () => {
    const { container } = render(<QuestionInput />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<QuestionInput />);
    getByText('');
  });
});
