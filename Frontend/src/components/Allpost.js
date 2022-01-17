import React, { Component } from 'react';
import Post from './Post';

const parentDiv = {
align: 'center',
margin: '0px auto auto auto',
textAlign: 'center',
}

class AllPost extends Component {
  
      
  
    render() {

      const  Deleat=()=>{
            localStorage.removeItem("title");
            localStorage.removeItem("message");
            localStorage.removeItem("image");
    
         }

	return (
	<div style={parentDiv}>
	<Post/>

     <button className='btn'  type="submit"  onClick={Deleat}>deleat</button>
	</div>
	);
}
}

export default AllPost;
