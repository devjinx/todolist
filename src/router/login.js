import React, { useState } from 'react';

function Login() {
    // State to store user input
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Event handler for form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Here, you can add code to send a request to your authentication API
        // to verify the user's credentials.
        // For simplicity, we'll just display the input values in this example.
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
