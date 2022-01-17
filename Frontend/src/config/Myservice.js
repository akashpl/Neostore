import axios from 'axios';
import { MAIN_URL } from './Url';
export function getPosts(){
    return axios.get(`${MAIN_URL}posts/fetchpost`);
}
export function postOtp(){
    return axios.post(`${MAIN_URL}posts/otppost`);
}
export function Resetotp(){
    return axios.post(`${MAIN_URL}posts/changepassword`);
}
export function addPost(data){
    return axios.post(`${MAIN_URL}posts/addpost`,data);
}
export function addPost1(data){
    return axios.post(`${MAIN_URL}posts/addpost1`,data);
}



export function Login(data){
    return axios.post(`${MAIN_URL}posts/signin`,data);
}
export function getmenu(data){
    return axios.get(`${MAIN_URL}posts/getpost`,data);
}
export function placeOrder(data){
    return axios.post(`${MAIN_URL}posts/order`,data) 
}
export function allorders(){
    return axios.get(`${MAIN_URL}posts/allorders`) 
}
export function email(){
    return axios.post(`${MAIN_URL}posts/email`) 
}
export function email2(){
    return axios.post(`${MAIN_URL}posts/email2`) 
}



