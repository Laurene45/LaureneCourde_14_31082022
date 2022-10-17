import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '.';

describe('Given Header component', () => {
  describe('When I click on button of header', () => {
    test('Then a new page should be displayed', () => {
      render(<BrowserRouter> <Header/>  </BrowserRouter>);
      fireEvent.click(screen.getByTestId('add-button'));
    });
  });
});
