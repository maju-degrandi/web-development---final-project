import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PageCart } from '../pages/Cart';
import '@testing-library/jest-dom/extend-expect';

// Mocks
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('PageCart', () => {
  const user = { id: 1, name: 'John' };
  const cart = [
    { id: 1, name: 'Item 1', qtt: 2, subtotal: 10 },
    { id: 2, name: 'Item 2', qtt: 1, subtotal: 5 },
  ];

  const updateCart = jest.fn();
  const setCart = jest.fn();

  test('renders PageCart component', () => {
    render(
      <PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />
    );

    // Check if the component renders without errors
    expect(screen.getByTestId('page-cart-items')).toBeInTheDocument();
  });

  test('displays cart items', () => {
    render(
      <PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />
    );

    // Check if the cart items are displayed correctly
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  test('calls updateCart when cart item is updated', () => {
    render(
      <PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />
    );

    // Encontre todos os botões com o texto "Delete"
    const deleteButtons = screen.queryAllByText('Delete');
    
    // Verifique se pelo menos um botão foi encontrado
    expect(deleteButtons.length).toBeGreaterThan(0);
    
    // Itere sobre os botões e simule o clique
    deleteButtons.forEach((button) => {
        fireEvent.click(button);
    });

    // Check if the updateCart function was called
    expect(updateCart).toHaveBeenCalled();
  });

  test('redirects to checkout page when user is logged in', () => {
    const navigate = jest.fn();
    jest.requireMock('react-router-dom').useNavigate.mockReturnValue(navigate);

    render(
      <PageCart user={user} updateCart={updateCart} cart={cart} setCart={setCart} />
    );

    // Simulate a checkout button click
    fireEvent.click(screen.getByText('Checkout'));

    // Check if the navigate function was called with the correct path
    expect(navigate).toHaveBeenCalledWith('/checkout');
  });

  test('redirects to login page when user is not logged in', () => {
    const navigate = jest.fn();
    jest.requireMock('react-router-dom').useNavigate.mockReturnValue(navigate);

    render(
      <PageCart user={{}} updateCart={updateCart} cart={cart} setCart={setCart} />
    );

    // Simulate a checkout button click
    fireEvent.click(screen.getByText('Checkout'));

    // Check if the navigate function was called with the correct path
    expect(navigate).toHaveBeenCalledWith('/login');
  });
});
