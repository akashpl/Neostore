import React, { useState, useEffect } from 'react'
import './Product.css'
 const NavigationBar = ({ user }) => {
    const [badge, setbadge] = useState(0)
    useEffect(() => {
        if (user === undefined) {
            let items = JSON.parse(localStorage.getItem('cart'))
            let sum = 0
            items?.forEach(ele => {
                sum += ele.quantity
            })
            setbadge(sum)
        }

    }, [])

    const logout = () => {
        localStorage.removeItem('cart')
        localStorage.removeItem('order')
        localStorage.removeItem('user')
    }
    return (

        <div style={{ backgroundcolore: "dark" }}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "red" }}><b>Neostore</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/"><b>Home</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="menu"><b>Products</b></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='cart'><b>Cart&nbsp; <span>{user === undefined?badge:user}</span></b></a>
                            </li>
                        </ul>
                        <div class="dropdown d-flex">
                            <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Signup/ Login
                                <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="login">Login</a></li>
                                <li><a href="signin">Register</a></li>
                                <li><a href="profile">Profile</a></li>
                                
                                <li><a  type="submit" onClick={()=>logout()}>logout</a></li>
                          
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>
        </div>

    )
}
export default NavigationBar;