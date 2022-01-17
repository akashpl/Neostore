import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useState,useEffect } from 'react'
import { TabContainer,Card,Container,Row,Button,Nav,Navbar,Col } from 'react-bootstrap'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Product.css'
import { padding } from '@mui/system';
//import NavigationBar from './NavigationBar';

export const Cart = () => {

    
    const navigate = useNavigate()
    const [state, setstate] = useState([])
    const [total, setTotal] = useState(0)
    const [info, setinfo] = useState(0)

    const refresh = () => {
        if(localStorage.getItem('cart') != undefined){

            setstate(JSON.parse(localStorage.getItem('cart')));
            let cartDetails = JSON.parse(localStorage.getItem('cart'));
            let sum = 0;
            cartDetails.forEach(ele => {
                sum += ele.price
            })
          
            setTotal(sum)
           
            sum = 0
            if(cartDetails.length !=0){
                cartDetails.forEach(ele => {
               sum+=ele.quantity
              })
            }
            setinfo(sum)
        }
    }
    useEffect(() => {
        refresh()
    }, [])

    const order = () => {
     
        let user = JSON.parse(localStorage.getItem('user'))
        localStorage.setItem('order', JSON.stringify({
            details: user?.email,
            price: total,
          
           
            status: "delivered"
        }))
        navigate('/order')
        // placeOrder({
        //     details:user.email,
        //     price:total,
        //     status:"delivered"
        // })
    }
    const deleteData = (index) => {
        state.splice(index, 1)
        localStorage.setItem('cart', JSON.stringify(state))
        refresh()

    }

        const add = (ele) => {

          let data = JSON.parse(localStorage.getItem('cart'))
      
          let flag = data?.filter(item =>
            item.name === ele.name
          )
          if (flag?.length === 0) {
            let details = { name: ele.name, price: ele.price, quantity: 1 ,image:ele.path }
            data.push(details)
            localStorage.setItem('cart', JSON.stringify(data));
            alert("Item added succesfully!!")
          }
          else {
            data?.map((e, index) => {
              if (e.name === ele.name) {
                data[index].quantity += 1
                data[index].price *= data[index].quantity
      
                localStorage.setItem('cart', JSON.stringify(data));
                alert("Added")
              }
            })
          }
          refresh()
        
               

    }
    return (
        <>
            
      
        <h2 >Cart</h2>
       
            <TableContainer component={Paper} className='products'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr. NO</TableCell>
            <TableCell align="right">Product Name</TableCell>
            {/* <TableCell align="right">image</TableCell> */}
            <TableCell align="right">Price</TableCell>
            
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {state.map((ele, index) =>
            <TableRow
        
            >
             
              <TableCell align="right">{index+1}</TableCell>
              
              <TableCell align="right">{ele.name}</TableCell>
             
              {/* <TableCell align="right"><img src={ele.path}/></TableCell>
              */}
              
              <TableCell align="right">{ele.price}</TableCell>
              <TableCell align="right">{ele.quantity}</TableCell>
              <TableCell align="right"> 
              <Button variant="contained" href="#contained-buttons" style={{height:'30px',textAlign:'center', padding: "10px"}} onClick={() => add(ele)}>Add</Button>
               
                 <Button variant="contained" href="#contained-buttons" style={{height:'30px',textAlign:'center'}} onClick={() => deleteData(index)}>Delete</Button>
                 </TableCell>
          
            </TableRow>

          )}
           <TableRow
        
        >
         
          <TableCell align="right" colSpan="2">Your Total is</TableCell>
          <TableCell align="right" colSpan="2"><b>{total}</b></TableCell>
         
          <TableCell align="right"> 
             <Button variant="contained" href="#contained-buttons" style={{height:'30px',textAlign:'center'}} onClick={() => order()}>Order</Button>
             </TableCell>
      
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    
        </>
    )
}
