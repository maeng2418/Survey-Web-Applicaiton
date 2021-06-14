import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SystemMsgDialog from './SystemMsgDialog';
describe('<SystemMsgDialog />', () => {
  it('matches snapshot', () => {
    const { container } = render(<SystemMsgDialog />);
    expect(container).toMatchSnapshot();
  });
  it('shows the elemnts correctly', () => {
    const { getByText } = render(<SystemMsgDialog />);
    getByText('');
  });
});
