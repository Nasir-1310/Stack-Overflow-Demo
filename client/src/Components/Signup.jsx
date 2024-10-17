import { useState } from "react";
import "./Signup.css"
import axios from 'axios'
import user_icon from "../assets/user.png";
import email_icon from "../assets/communication.png";
import password_icon from "../assets/padlock.png";

import { useNavigate } from "react-router-dom";


function Signup(){

    const [name,setName]=useState();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            console.log('Please fill all the fields');
            return;
        }
        axios.post('http://localhost:3001/register', { name, email, password })
            .then(result =>{
                 console.log(result);
                 navigate('/login');
    })
            .catch(err => console.log(err));
    };
    


    return(
            <div className='container'>
                <div className='header'>
                    <div className='text'>Sign Up</div>
                    <div className='underLine'></div>
                </div>
                <form onSubmit={handleSubmit}>
                <div className='inputs'>
                    
                        <div className='input'>
                            <img src={user_icon} style={{ height: '20px', width: '20px' }} alt='' />
                            <input
                                type='text'
                                placeholder='Name'
                                autoComplete="off"
                                name="name"
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                   

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
                <p>Already Have an Account? <a href="/login">Click here</a></p>
            </div>
      
    )
}

export default Signup