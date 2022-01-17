import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const galleryStyle = {
	border: 'none',
	margin: 0,
	color: '#fff',
	fontWeight: 'bold',
	padding: '16px 20px',
	position: 'absolute',
	top: '35px',
	right: '200px',
	background: '#7bc74d',
}
const postBtnStyle = {
	border: 'none',
	margin: 0,
	color: '#fff',
	fontWeight: 'bold',
	padding: '16px 20px',
	background: '#7D4C92 ',
	width: '417px',
}
const parentDiv = {
	align: 'center',
	margin: '0px auto auto auto',
	textAlign: 'center',
}
const formStyle = {
	width: '400px',
	border: '1px solid lightgray',
	margin: '10px auto 10px auto',
	textAlign: 'center',
	padding: '30px 40px 30px 40px',
}
const inputFields = {
	width: 'inherit',
	fontFamily: 'arial',
	padding: '6px',
}

class PostForm extends Component {
	handleSubmit = (e) => {
		e.preventDefault();
		const title = this.getTitle.value;
		const message = this.getMessage.value;
		const image = this.getImage.value;
		localStorage.setItem('title', title);
		localStorage.setItem('message', message);
		localStorage.setItem('image', image);
		this.getTitle.value = '';
		this.getMessage.value = '';
		this.getImage.value = '';
	}
	render() {
		return (
			<div style={parentDiv}>
				<form onSubmit={this.handleSubmit} style={formStyle}>
					<input style={inputFields} required type="file"
						placeholder="Paste your image "
						ref={(input) => this.getImage = input}
					/><br></br>

					<input style={inputFields} required type="text"
						placeholder="Enter email"
						ref={(input) => this.getTitle = input}
					/><br /><br />
					<br></br>

					<input style={inputFields} required type="number"
						placeholder="Phone number"
						ref={(input) => this.getMessage = input}
					/><br></br>
					<button style={postBtnStyle}>Post</button>
				</form>
				<Link to='/gallery'>
					<button style={galleryStyle}>
						View Gallery
					</button>
				</Link>
			</div>
		);
	}
}
export default PostForm;
