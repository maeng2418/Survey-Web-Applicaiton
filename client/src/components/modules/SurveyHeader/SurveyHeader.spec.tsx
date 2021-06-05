import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SurveyHeader from './SurveyHeader';
describe('<SurveyHeader />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SurveyHeader />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SurveyHeader />);
    getByText('');
  });
});
