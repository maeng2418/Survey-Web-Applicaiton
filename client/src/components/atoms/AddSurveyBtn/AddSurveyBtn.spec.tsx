import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import AddSurveyBtn from './AddSurveyBtn';
describe('<AddSurveyBtn />', () => {
  it('matches snapshot', () => {
    const { container } = render(<AddSurveyBtn />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<AddSurveyBtn />);
    getByText('');
  });
});
