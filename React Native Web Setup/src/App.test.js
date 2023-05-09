import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


//If Error exist then comment above code and uncomment below code

// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });