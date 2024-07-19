import React from 'react'
import './CSS/LoginSignup.css'
import { useState } from 'react';
function LoginSignup() {
  const [state,setState]= useState("logIn")
  return (
    <div className='loginsignup'>
      <div className='loginsinup-container'>
        <h1>{state}</h1>
        <div className='loginsingup-fields'>
          {state==="Sign Up"?<input type="text" placeholder='your name' />:""}
          <input type="email" placeholder='email Address'/>
          <input type="password"  placeholder='Password'/>
        </div>
        <button>Continue</button>
        {
        state==="Sign Up"?
        <p className='loginsignup-login'>Already have an account? <span onClick={()=>{setState("Login")}}>Login her</span> </p>
        :
        <p className='loginsignup-login'>Create an account <span onClick={()=>{setState("Sign Up")}}>Click here</span> </p>
        }
        <div className='loginsingup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;