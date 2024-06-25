import React from 'react'
import './CSS/LoginSignup.css'
function LoginSignup() {
  return (
    <div className='loginsignup'>
      <div className='loginsinup-container'>
        <h1>Sign Up</h1>
        <div className='loginsingup-fields'>
          <input type="text" placeholder='your name' />
          <input type="email" placeholder='email Address'/>
          <input type="password"  placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account? <span>Login her</span> </p>
        <div className='loginsingup-agree'>
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;