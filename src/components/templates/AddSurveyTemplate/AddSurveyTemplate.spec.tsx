import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AddSurveyTemplate from './AddSurveyTemplate';
describe('<AddSurveyTemplate />', () => {
  it('matches snapshot', () => {
    const { container } = render(<AddSurveyTemplate />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<AddSurveyTemplate />);
    getByText('');
  });
});
