import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SurveyTitleInput from './SurveyTitleInput';
describe('<SurveyTitleInput />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SurveyTitleInput />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SurveyTitleInput />);
    getByText('');
  });
});
