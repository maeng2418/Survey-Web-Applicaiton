import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import QuestionFormBox from './QuestionFormBox';
describe('<QuestionFormBox />', () => {
  it('matches snapshot', () => {
    const { container } = render(<QuestionFormBox />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<QuestionFormBox />);
    getByText('');
  });
});
