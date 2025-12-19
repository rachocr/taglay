import React, { useState } from 'react';
import '../styles/SignInPage.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/UserService';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await loginUser({ email, password });
            console.log('Login successful:', data);

            localStorage.setItem('token', data.token);
            localStorage.setItem('firstName', data.firstName);
            localStorage.setItem('type', data.type);

            navigate('/dashboard/dash-articles', { state: { firstName: data.firstName, type: data.type } });
        } catch (err) {
            console.error('Login failed:', err.response?.data?.message || err.message);
            setError(err.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="auth-shell">
            <div className="auth-hero">
                <div className="auth-hero-badge">Rider's Logbook</div>
                <h1>Welcome to the garage.</h1>
                <p className="muted">Sign in to track your routes, maintenance, and stories.</p>
            </div>

            <div className="auth-card">
                <div className="auth-card-header">
                    <h2>Sign in</h2>
                    <p className="muted">Enter your credentials to access your logs.</p>
                </div>
                
                {error && <p style={{color: '#ef4444', fontSize: '0.9rem', marginBottom: '10px'}}>{error}</p>}

                <form className="auth-form" onSubmit={handleLogin}>
                    <label className="auth-field">
                        <span>Email</span>
                        <input
                            type="email"
                            id="email"
                            placeholder="rider@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>

                    <label className="auth-field">
                        <span>Password</span>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>

                    <button type="submit" className="auth-submit">
                        Start Engine
                    </button>
                </form>
                <p className="auth-footnote muted">Ride Safe. Document Everything.</p>
            </div>
        </div>
    );
};

export default SignInPage;