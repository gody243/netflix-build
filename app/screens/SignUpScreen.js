import React, { useRef } from 'react'
import "./SignUpScreen.css"
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

function SignUpScreen() {

    const emailRef=useRef(null)
    const passwordRef=useRef(null)
   
    
    const register = (e)=>{
        e.preventDefault()
    createUserWithEmailAndPassword( auth,
            emailRef.current.value,
            passwordRef.current.value
        // try{
        //     const userCredentials=createUserWithEmailAndPassword(auth,emailRef.current.value,passwordRef.current.value)
        //     const user=userCredentials.user
        //     return user
        // }catch(error){
        //     console.error("Error registering user: ", error)
        //     throw error
        // }
        ).then((authUser)=>{
            console.log(authUser)
        }).catch((error)=>{
            alert(error.message)
        })
    }
    const signIn=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='email address'/>
                <input ref={passwordRef} placeholder='Password' type='password' />
                <button onClick ={signIn}type='submit'>Sign In</button>

                <h4><span className='signupScreen__gray'>New to Netflix?</span> 
                <span className='signupScreen__link' onClick={register}>Sign Up now</span></h4>
            </form>
    </div>
  )
}

export default SignUpScreen