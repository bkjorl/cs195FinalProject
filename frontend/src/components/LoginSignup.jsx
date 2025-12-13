{/*used tutorial https://www.youtube.com/watch?v=8QgQKRcAUvM" to help create*/}
{/*used claude to help debug css issues and connection to backend issues*/}
import React from 'react';
import './LoginSignup.css';

function LoginSignup () {
    const [action, setAction] = React.useState('Sign Up');

    
    return (
        <div className='container'>
            <div className='header'>
                <h2>{action}</h2>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <input type="text" placeholder='Username' />
                </div>
                <div className='input'>
                    <input type="email" placeholder='Email' /> 
                </div>
                <div className='input'>
                    <input type="password" placeholder='Password' />    
                </div>
            </div>
            <div className="submit-container">
                <button className='submit-button' onClick={() => setAction('Sign Up')}>Sign Up</button>
                <button className='submit-button' onClick={() => setAction('Log In')}>Log In</button>
            </div>

        </div>
    );
}

export default LoginSignup;