import React from 'react'
import { Navigate } from 'react-router'
import {Link} from 'react-router-dom'
import './Order.css'
export const Placed = () => {
    return (
        <div className='card' >
            {localStorage.getItem('user') != undefined ?
            <div  >
                <h4>Order Has Been Placed Successfully!</h4>
                <h4  style={{color:'red'}}>Thank You For Choosing us... </h4>
                <h4 >You will Recive the Notification On email </h4>
                <Link to="/Menu"  className="btn btn-primary" >Go and Order Somemore</Link>
            </div>
            :<Navigate to='/login'></Navigate>}
        </div>
    )
}
