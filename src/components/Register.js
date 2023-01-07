import React, { useState } from "react";
import "../blog.css/register.css";
const Register = () => {
  const [formData, setFormData] = useState({ userName: "", password:'',email:'',confirmPass:'' });
  function handleForm(e){
    setFormData(prev => {
        return {
            ...prev,
            [e.target.name]: e.target.value
        }
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    if(formData.password !== formData.confirmPass){
        return false
    }else{
        localStorage.setItem('formData',JSON.stringify(formData))
        setFormData(() => {
           return {
            userName: '', email: '', password:'', confirmPass:''
          }
        })
        
    }   
  }
  
  return (
    <div className="register">
      <div className="img-parent">
        <img
          src="https://cdn.pixabay.com/photo/2016/08/29/09/22/sign-up-1627726__340.png"
          alt="register"
        />
      </div>
      <div className="form-parent">
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address *</label>
          <input type="text" id="email" required name="email" onChange={handleForm}  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/>
          <label htmlFor="username">UserName *</label>
          <input type="text" id="username" name="userName" onChange={handleForm}/>
          <label htmlFor="password">Password *</label>
          <input type="password" id="password" required name="password" onChange={handleForm} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/>
          <label htmlFor="confirm">Confirm Password *</label>
          <input  type="password" id="confirm" required name="confirmPass" onChange={handleForm}/>
          <input id="submit" type="submit" value="register" className="register-btn" />
        </form>
      </div>
    </div>
  );
};

export default Register;
