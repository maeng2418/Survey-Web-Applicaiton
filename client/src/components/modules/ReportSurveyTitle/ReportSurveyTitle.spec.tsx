import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import ReportSurveyTitle from './ReportSurveyTitle';
describe('<ReportSurveyTitle />', () => {
  it('matches snapshot', () => {
    const { container } = render(<ReportSurveyTitle />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<ReportSurveyTitle />);
    getByText('');
  });
});
