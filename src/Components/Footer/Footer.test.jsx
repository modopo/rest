import Footer from '.';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Testing the footer component', () => {
  test('Shoulder render footer with copyright symbol', () => {
    render(<Footer />);

    const copyright = screen.getByText(/©/i);
  
    expect(copyright).toBeInTheDocument();
  })
})
