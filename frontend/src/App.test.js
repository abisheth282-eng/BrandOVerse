import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BrandOverse hero heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to BrandOverse/i);
  expect(headingElement).toBeInTheDocument();
});
