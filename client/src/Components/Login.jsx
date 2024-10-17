import React  from "react";
import { useState } from "react";
import "./login.css"
import axios from 'axios'

import email_icon from "../assets/communication.png";
import password_icon from "../assets/padlock.png";

import { useNavigate } from "react-router-dom";


function Login(){
   
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            console.log('Please fill all the fields');
            return;
        }
        axios.post('http://localhost:3001/login', {email, password })
            .then(result =>{
                 console.log(result);
                 if(result.data==="Success"){
                    navigate('/home');
                 }
                
    })
         .catch(err => console.log(err));
    };
    


    return(
            <div className='container'>
                <div className='header'>
                    <div className='text'>Login</div>
                    <div className='underLine'></div>
                </div>
                <form onSubmit={handleSubmit}>
                <div className='inputs'>
                   
                    <div className='input'>
                        <img src={email_icon} style={{ height: '20px', width: '20px' }} alt='' />
                        <input
                            type='email'
                            name="email"
                            placeholder="Email"
                            autoComplete="off"
                            onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>

                    <div className='input'>
                        <img src={password_icon} style={{ height: '20px', width: '20px' }} alt='' />
                        <input
                            type='password'
                            name="password"
                            placeholder='Password'
                            autoComplete="new-password"
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className='submit-btn'>Submit</button>
                
                </form>
                <p>New user? <a href="/register">Signup</a></p>
               
            </div>
      
    )
}
export default Login