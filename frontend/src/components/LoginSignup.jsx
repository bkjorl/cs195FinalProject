{/*used tutorial https://www.youtube.com/watch?v=8QgQKRcAUvM to help create*/}
{/*used claude to help debug connection to backend issues: issues with POST route, error handling, and saving userId*/}
import React from 'react';
import './LoginSignup.css';
import { createUser, getUser } from '../api/users';
import { useAuth } from '../contexts/AuthContext';

function LoginSignup() {
    const { login } = useAuth();
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSignUp = async () => {
        setError('');
        
        if (!username.trim() || !email.trim() || !password.trim()) {
            setError('All fields are required');
            return;
        }

        try {
            const userData = {
                userUName: username,
                userEmail: email,
                userPassword: password
            };
            
            const newUser = await createUser(userData);
            login(newUser);
        } catch (err) {
            console.error('Sign up error:', err);
            setError('Failed to create user. Make sure your backend is running on port 3000.');
        }
    };

    const handleLogIn = async () => {
        setError('');
        
        if (!email.trim() || !password.trim()) {
            setError('Email and password are required');
            return;
        }

        try {
            const users = await getUser();
            const user = users.find(u => u.userEmail === email && u.userPassword === password);
            if (user) {
                login(user);
            } else {
                setError('Invalid email or password');
            }
        } catch (err) {
            console.error('Log in error:', err);
            setError('Failed to log in. Make sure your backend is running on port 3000.');
        }
    };
    
    return (
        <div className='container'>
            <div className='header'>
                <h2>Daily Journal</h2>
                <div className='underline'></div>
            </div>
            {error && <div style={{ color: 'red', background: 'white', padding: '10px', borderRadius: '5px', marginBottom: '10px', maxWidth: '450px' }}>{error}</div>}
            <div className='inputs'>
                <div className='input'>
                    <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className='input'>
                    <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /> 
                </div>
                <div className='input'>
                    <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />    
                </div>
            </div>
            <div className="submit-container">
                <button className='submit-button' onClick={handleSignUp}>Sign Up</button>
                <button className='submit-button' onClick={handleLogIn}>Log In</button>
            </div>
        </div>
    );
}

export default LoginSignup;