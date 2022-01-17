import React, { useEffect, useState } from 'react'
import { getmenu, getPosts } from '../config/Myservice'
//import { NavigationBar } from './NavigationBar'
import './Product.css'
import NavigationBar from './NavigationBar';

 function Menu() {
  const [search,setsearch]=useState("")
  const [state, setstate] = useState([])
  const [info, setinfo] = useState(0)

  const refresh = () => {
    getmenu().then(res => {
      setstate(res.data)
    })
    let items = JSON.parse(localStorage.getItem('cart'))
    let sum = 0
    if (items?.length != 0) {
      items?.forEach(ele => {
        sum += ele.quantity
      })
    }
    setinfo(sum)
  }

  useEffect(() => {
    refresh()
  }, [])

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
        
    <NavigationBar user={info} />

            
    <input type='text' placeholder='search...' onChange={(event)=>{
              setsearch(event.target.value) 
        }}
      />




      <div className="products">
        
       
      
       
        
       { state.filter((val)=>{
         if(search==""){
           return val
         }else if (val.name.toLowerCase().includes(search.toLowerCase())){
          return val
        
        }
       }).map(ele=>
          <div className="card">
            <div >
              <img className='product-image'
                src={ele.path}  />
            </div>
            <div>
              <h3 className='product.name'>{ele.name}</h3>
            </div>
            <div className='product-price'>${ele.price}</div>
            <div>
              <button className='product-add-button'   onClick={() => add(ele)}>Add to Cart</button>
            </div>

          </div>
    
    
    
    )}
           

    </div>
    </>  
);
};

export default Menu;
