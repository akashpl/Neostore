import React, { useEffect } from 'react'
import axios from 'axios';
import '../login.css'
import { useNavigate } from 'react-router-dom'
import { useRef,useState } from 'react';
import { Resetotp } from '../config/Myservice';

 const Reset = () => {
   
    const navigate = useNavigate()
    const otpRef = useRef(null)
    const passwordRef = useRef(null)
    const cpasswordRef = useRef(null)
    const [state, setstate] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        Resetotp().then(res=>{
          setstate(res.data)
          console.log(res.data)
        })
      },[])

      const checkdata=(event)=>{
          event.preventDefault()
          let flag=true
          let otp=otpRef.current.value;
          let password=passwordRef.current.value;
          let cpassword=cpasswordRef.current.value;
          state= JSON.parse(state);
           console.log(state);
         
          state.forEach(function(ele){
            if( otp=ele.otp && password===cpassword ){
                localStorage.setItem('user1',JSON.stringify(ele))
                flag=false
                alert("otp sent Succesfully")
                navigate("/login")
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
                <h1>Reset password</h1>
                <form method="post">
                    <div class="txt">
                        <input type="text" name="otp" placeholder="Enter Otp" ref={otpRef}  required />
                    </div>
                    <div class="txt">
                        <input type="text" name="password" placeholder="Enter Password" ref={passwordRef}  required />
                    </div>
                    <div class="txt">
                        <input type="text" name="cpassword" placeholder="Enter Conform password" ref={cpasswordRef}  required />
                    </div>
                   
                    

                        <button  class="btn"  onClick={checkdata} >change password</button>
                     
                        <div class="signup"><a href="http://localhost:3000/login">Login</a>  </div><div class="signup"><a href="http://localhost:3000/forgot">Back</a>  </div>
                       
                       
                </form>
            </div>
        </section>

     
        
      
            
        </>
    )
}
export default Reset;