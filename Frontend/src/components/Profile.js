import React from 'react'
import { Navigate } from 'react-router'
//import { NavigationBar } from './NavigationBar'
import {Card,Container} from 'react-bootstrap'
import './Product.css'

export const Profile = () => {
    return (
        <>
        {localStorage.getItem('user') !== undefined ?
        <div>
        
       <Card className="text-center" style={{ height:'500px', width:"3600px",textAlign:'center',paddingTop:'100px', backgroundColor:"lightseagreen"}}>
        <Card.Header ><img src={"images/m2.jpeg"} style={{height:"150px",width:"50%"}}/></Card.Header>
        <input type="file"></input>
        <Card.Body>
            <Card.Title>Welcome <b style={{color:"red"}}> {JSON.parse(localStorage.getItem('user'))?.name}</b></Card.Title>
            <Card.Text>
            Email : <b style={{color:"blue"}}> {JSON.parse(localStorage.getItem('user'))?.email}</b>
            </Card.Text>
            <Card.Text>
            Phone Number : <b style={{color:"blue"}}> {JSON.parse(localStorage.getItem('user'))?.phone}</b>
            </Card.Text>
           
        </Card.Body>
       
        </Card>
        </div>
        
        : <Navigate to='/login'></Navigate> }
        </>
    
    
    )


}
