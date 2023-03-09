import React from 'react';
import {makeRequestAuth} from '../../util/makeRequest/index';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {LOGIN} from '../../util/constants';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

  
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email,password);
        makeRequestAuth(LOGIN(email,password)).then((res) => {
            localStorage.clear();
            localStorage.setItem('token', res.data.token);
            console.log(res.data.token);
            navigate('/home');
            
        }
        ).catch(() => {
            navigate('/error/500');
        }
        );
    };
    return (
        
        <form  className ='login-inputs login-form' onSubmit={handleSubmit}>
            <div className='inputs'>
                <label  htmlFor='email'>Email:</label>
                <input type='email' id='email' value={email} onChange={handleEmailChange} />
            </div>
            <div className='inputs'>
                <label  htmlFor='password'>Password:</label>
                <input type='password' id='password' value={password} onChange={handlePasswordChange} />
            </div>
            <button  type='submit'>Login</button>
            <a>Forgot Password?</a>
        </form>
    );
}
