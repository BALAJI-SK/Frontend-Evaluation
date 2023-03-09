/* eslint-disable no-undef */
import {React} from 'react';

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { makeRequestAuth } from '../../util/makeRequest';
// import { LOGIN } from '../../util/constants';
import './LoginPage.css';
import LoginForm from '../../components/LoginForm';


export default function LoginPage() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const navigate = useNavigate('');
  
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // };
  
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // };
  
    // const handleLoginClick = (event) => {
      
    //     event.preventDefault();
    //     console.log(email,password);
    //     makeRequestAuth(LOGIN(email,password)).then((res) => {
    //         localStorage.clear();
    //         localStorage.setItem('token', res.data.token);
    //         console.log(res.data.token);
    //         navigate('/home');
            
    //     }
    //     ).catch(() => {
    //         navigate('/error/500');
    //     }
    //     );
  
    // };
  
  
  
  
    return (
        <div className="login-main">
            <div className='login-one'>
                <div className="dot top-dot"></div>
                <div className="dot top-dot1"></div>

                <div className="header-text">
                    <a><b>Design APIs fast,</b></a>
                    <a><b>Manage content easily.</b></a>
                </div>
                <div className="dot bottom-dot"></div>
                <div className=" bottom-dot1"></div>
                <div className="img-main">
                    <img src={require('../../assets/undraw-upload-re-pasx_2023-03-09/undraw-upload-re-pasx.png')} alt="login" />
                </div>
            </div>
            <div className="login-two">
                <a id="login-msg">Login to your CMS+ account</a>
              
                <LoginForm/>
               
    
               
            </div>
        </div>
    );
}
  
 