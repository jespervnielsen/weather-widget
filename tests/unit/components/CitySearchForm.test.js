// tests/unit/components/CitySearchForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for .toBeInTheDocument()
import CitySearchForm from '../../../src/components/CitySearchForm';
import { useRouter } from 'next/router';

// Mock the Next.js router
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('CitySearchForm', () => {
  const mockRouterPush = jest.fn();

  beforeEach(() => {
    // Reset mocks before each test
    mockRouterPush.mockReset();
    useRouter.mockReturnValue({ push: mockRouterPush });
  });

  it('renders form fields correctly', () => {
    const mockOnCityChange = jest.fn();
    render(<CitySearchForm onCityChange={mockOnCityChange} />);

    expect(screen.getByPlaceholderText('Enter a city')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('calls onCityChange and updates URL on form submit', () => {
    const mockOnCityChange = jest.fn();
    render(<CitySearchForm onCityChange={mockOnCityChange} />);

    // Simulate typing into the input field
    const input = screen.getByPlaceholderText('Enter a city');
    fireEvent.change(input, { target: { value: 'Roskilde' } });

    // Simulate submitting the form
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    // Check if onCityChange was called with the expected value
    expect(mockOnCityChange).toHaveBeenCalledWith('roskilde');

    // Check if the router's push method was called with the correct query
    expect(mockRouterPush).toHaveBeenCalledWith({
      pathname: '/',
      query: { city: 'roskilde' },
    });
  });
});
