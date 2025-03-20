import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome to Turfy Blog heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Welcome to Turfy Blog/i);
  expect(headingElement).toBeInTheDocument();
});
