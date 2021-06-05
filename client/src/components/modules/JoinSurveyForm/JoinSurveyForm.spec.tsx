import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import JoinSurveyForm from './JoinSurveyForm';
describe('<JoinSurveyForm />', () => {
  it('matches snapshot', () => {
    const { container } = render(<JoinSurveyForm />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<JoinSurveyForm />);
    getByText('');
  });
});
