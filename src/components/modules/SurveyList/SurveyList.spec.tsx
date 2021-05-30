import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SurveyList from './SurveyList';
describe('<SurveyList />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SurveyList />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SurveyList />);
    getByText('');
  });
});
