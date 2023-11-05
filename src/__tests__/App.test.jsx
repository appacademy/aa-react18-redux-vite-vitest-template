import { render, screen } from '@testing-library/react';
import App from '../App';

describe ('App', () => {
  it ('should say "Hello from App"', () => {
    render(<App />);

    expect(screen.getByText(/Hello from App/)).toBeInTheDocument();
  })
})
