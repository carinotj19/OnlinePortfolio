import React from 'react';
import { render, screen } from '@testing-library/react';
// Mock components that rely on webpack-specific features or heavy deps
jest.mock('./components/Projects/Projects', () => () => <div />);
jest.mock('./components/Certificates/Certificates', () => () => <div />);
jest.mock('./components/UI/ImageCarousel/ImageCarousel', () => () => <div />);
import App from './App';

test('renders header text', () => {
  render(<App />);
  // Header contains this phrase in the main H1
  const heading = screen.getByText(/Software Developer/i);
  expect(heading).toBeInTheDocument();
});
