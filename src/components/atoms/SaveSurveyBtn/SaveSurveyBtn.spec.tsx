import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SaveSurveyBtn from './SaveSurveyBtn';
describe('<SaveSurveyBtn />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SaveSurveyBtn />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SaveSurveyBtn />);
    getByText('');
  });
});
