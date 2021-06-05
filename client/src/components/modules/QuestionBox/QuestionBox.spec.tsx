import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import QuestionBox from './QuestionBox';
describe('<QuestionBox />', () => {
  it('matches snapshot', () => {
    const { container } = render(<QuestionBox />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<QuestionBox />);
    getByText('');
  });
});

