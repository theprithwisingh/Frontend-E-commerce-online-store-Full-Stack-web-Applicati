import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <div>
        <input type="text" placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}
export default NewsLetter;