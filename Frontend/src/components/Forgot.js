import React, { useEffect } from 'react'
import axios from 'axios';
import '../login.css'
import {  getPosts, postOtp, addreset } from '../config/Myservice';
import { useNavigate } from 'react-router-dom'
import { useRef,useState } from 'react';

 const Forgot = () => {
   
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const [state, setstate] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        postOtp().then(res=>{
          setstate(res.data)
          console.log(res.data)
        })
      },[])

       const checkdata=(event)=>{
         
          event.preventDefault()
          let flag=true
          let email=emailRef.current.value;
          state= JSON.parse(state);
           console.log(state);
         
          state.forEach(function(ele){
            if(email===ele.email ){
                localStorage.setItem('resetuser',JSON.stringify(ele))
                flag=false
                
                alert("otp sent Succesfully")
                navigate("/reset")
            }
        })
        if(flag){
          alert("Email  does not existed  or you are not registered with has")
        }
      }

   
   return (
        <>
       <section>
            <div class="center" style={{marginTop:'80px'}}>
                <h1>Forgot password</h1>
                <form method="post">
                    <div class="txt">
                        <input type="text" name="email" placeholder="Enter Email" ref={emailRef}  required />
                    </div>
                   
                      

                        <button  class="btn"   onClick={checkdata} >send OTP</button>


                        <div class="signup"><a href="http://localhost:3000/reset">enter otp</a>  </div>
                       
                     
                        <div class="signup"><a href="http://localhost:3000/login">Login</a>  </div>
                       
                </form>
            </div>
        </section>

     
        
      
            
        </>
    )
}
export default Forgot;