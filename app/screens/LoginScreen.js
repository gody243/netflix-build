'use client'
import React, { useState } from 'react'
import './LoginScreen.css'
import SignUpScreen from './SignUpScreen' 


function LoginScreen() {
    const [signIn,setSignIn]=useState(false)
  return (
    
    <div className='loginScreen__background'>
        <img
        className='loginScreen__logo'
        src='https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png'
        alt=""
        />
        <button onClick={()=>setSignIn(true)} className='loginScreen__button' >
            Sign In
        </button>
        <div className='loginScreen__gradient'>

            <div className='loginScreen__body'>
                {signIn ? (
                    <SignUpScreen />
                ):(
            <>
            <h1>Unlimited films, TV programmes and more.</h1>
            
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='loginScreen__input'>
                <form>
                    <input type="email" placeholder='email address'/>
                    <button onClick={()=>setSignIn(true)}className='loginScreen_getStarted'>GET STARTED</button>
                </form>
            </div>
        </> 
        )}
            </div>
        </div>
    </div>
    
  )
}

export default LoginScreen