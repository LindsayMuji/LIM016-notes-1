import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


beforeEach (() => {
  render(<App />);
});

test('renders to the welcome', () => {
  const welcomeText = screen.getByText(/welcome to/i);
  expect(welcomeText).toBeInTheDocument();
});

test('renders Simple Notes Titlle', () => {
  const tittle = screen.getByText(/Simple Notes/i);
  expect(tittle).toBeInTheDocument();
});

test('renders input placeholder', () => {
  const emailPlac = screen.getByPlaceholderText(/enter your email/i);
  expect(emailPlac).toBeInTheDocument();
});


/* test('renders form elements', () => {
  const btnEl = screen.getByText('Button',{ name: /Log In/i});
  expect(btnEl).toBeInTheDocument();
}); */
