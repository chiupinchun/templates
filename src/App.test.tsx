import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('App', () => {
  it('renders App component', async () => {
    render(<App />);
    const name = 'ㄐㄐ';
    const input = screen.queryByPlaceholderText('請輸入姓名');
    if (input) {
      await userEvent.type(input, name);
    }

    expect(screen.getByText(`歡迎，${name}`)).toBeInTheDocument();
  });
});