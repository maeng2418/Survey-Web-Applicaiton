import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SurveyReportTemplate from './SurveyReportTemplate';
describe('<SurveyReportTemplate />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SurveyReportTemplate />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SurveyReportTemplate />);
    getByText('');
  });
});
