import { render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
   //rendering our component
  render(<App />);
  // / screen -> will get  the output
  const linkElement = screen.getByText(/learn react/i);
// compare the expected output with the actual output
  expect(linkElement).toBeInTheDocument();
});
