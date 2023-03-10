import React from 'react';
import {makeRequestAuth} from '../../util/makeRequest/index';
import {useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {SIGNUP} from '../../util/constants';

export default function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigate = useNavigate();

  
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleRePasswordChange = (event) => {
        setRePassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if(password !== rePassword){
            alert('Password and RePassword should be same');
            return;
        }
        makeRequestAuth(SIGNUP(email,password)).then(() => {
           
            navigate('/login');
            
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
            <div className='inputs'>
                <label  htmlFor='password'>ReEnter Password:</label>
                <input type='password' id='password' value={rePassword} onChange={handleRePasswordChange} />
            </div>
            <button  type='submit'>Login</button>
            <a>Forgot Password?</a>
        </form>
    );
}
