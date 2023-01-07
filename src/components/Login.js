import React from 'react';
import '../blog.css/login.css'
const Login = () => {
    return (
        <div className="login">
            <div className='img-parent'>
                <img src="https://img.lovepik.com/background/20211021/small/lovepik-secure-password-landing-background-image_500503201.jpg" alt="login" />
            </div>
            <div className='form-parent'>
            <form className='form'>
                <label htmlFor="user" >UserName or Email *</label>
                <input type='text' id='user' required/>
                <label htmlFor="password">Password *</label>
                <input type='password' id='password' required/>
                <input type='submit' value='Login' className='login-btn'/>
            </form>
            </div>
        </div>
    );
}

export default Login;
