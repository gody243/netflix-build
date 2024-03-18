'use client'
import HomeScreen from "./screens/HomeScreen";
import React, { useEffect } from "react";
import LoginScreen from "./screens/LoginScreen";
import {auth} from "./firebase"
import {useDispatch,useSelector,Provider} from "react-redux"
import {login,logout, selectUser} from "./features/userSlice"
import{BrowserRouter as Router,Routes,Route} from "react-router-dom"
import { configureStore } from "@reduxjs/toolkit";

export default function Home() {
 
  const user= useSelector(selectUser)
  const dispatch=useDispatch()

  useEffect(()=>{
   const unsubscribe= auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        //logged in
       
        dispatch(
          login({
          uid:userAuth.uid,
          email:userAuth.email,
        })
        )
      }
      else{
        //logged out
        dispatch(logout())
      }
    })

    return unsubscribe
  },[])

  return (

    <main className="app">    
      
        <Router>
          <Provider store={configureStore}>
            {!user?(
              
            <LoginScreen />
            
            ):(
              <Routes>
                <Route  exact path="/">
              
                <HomeScreen />
                
                </Route>
              </Routes>
            )}
          </Provider>
        </Router> 
      
    </main>
    
  );
}
