import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate(); // Initialize navigate for navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    const handleRegisterClick = () => {
        // Redirect to the registration page
        navigate('/register');
    };

    const handleResetpasswordClick = () => {
        // Redirect to the Reset Password page
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="show-password-button"
                        >
                            {showPassword ? 'Hide Password' : 'Show Password'}
                        </button>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="reset-password-button" onClick={handleResetpasswordClick}>
                            Reset Password
                        </button>
                        <button type="button" className="register-button" onClick={handleRegisterClick}>
                            Register
                        </button>
                    </div>
                    <div className="form-actions">
                        <button type="submit" className="login-button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
