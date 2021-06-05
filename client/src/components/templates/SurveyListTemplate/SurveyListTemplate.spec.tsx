import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SurveyListTemplate from './SurveyListTemplate';
describe('<SurveyListTemplate />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SurveyListTemplate />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SurveyListTemplate />);
    getByText('');
  });
});
