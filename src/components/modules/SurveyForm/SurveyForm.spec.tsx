import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SurveyForm from './SurveyForm';
describe('<SurveyForm />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SurveyForm />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SurveyForm />);
    getByText('');
  });
});
