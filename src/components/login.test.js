import { render, fireEvent } from '@testing-library/react';
import Login from './login';

test('renders login form', () => {
    const { getByLabelText, getByText } = render(<Login />);
    const usernameInput = getByLabelText('User Name');
    const passwordInput = getByLabelText('Password');
    const confirmPasswordInput = getByLabelText('Confirm Password');
    const loginButton = getByLabelText(/login-button/i); // use regex to match any text containing "Login"
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: '123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '123' } });

    const pass1 = getByLabelText('Password').value;
    const pass2 = getByLabelText('Confirm Password').value;
    fireEvent.click(loginButton);

    expect(pass1).toBe(pass2);
});
