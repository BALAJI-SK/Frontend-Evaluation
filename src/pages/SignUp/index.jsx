/* eslint-disable no-undef */
import {React} from 'react';


import './SignUp.css';
import SignUpForm from '../../components/SignUpForm';


export default function SignUp() {
    
  
  
  
  
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
              
                <SignUpForm/>
               
    
               
            </div>
        </div>
    );
}
  
 