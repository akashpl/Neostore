const express=require('express');
const fs=require('fs')
const router = express.Router();
const jwt=require('jsonwebtoken')
const jwtSecret="asd889asdas656asasksksfhd"
const catModel=require('../db/userschema')
const menuModel=require('../db/menuSchema')
const otpModel=require('../db/otpSchema')
const orderModel=require('../db/orderSchema')
const nodemailer=require('nodemailer')


var transporter = nodemailer.createTransport({
    service: 'gmail',
  
    auth: {
        user: 'akashpl.1rn17ec093@gmail.com',
        pass: 'Akashpl@123'
      }
  });
  
router.get('/fetchpost', (req, res) => {
    catModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})


router.post('/otppost',  async (req, res) => {
    console.log (req.body.email)
    let data= catModel.findOne({email:req.body.email});
    console.log(data)
    const responseType={};
    if(data){
        let otpcode=Math.floor((Math.random()*10000)+1);
        let otpData= new otpModel({
            email:req.body.email,
            
            code:otpcode,
            expireIn:new Date().getTime()+300*1000
    
        })
        let otpResponse= await otpData.save();
         
         responseType.statusText= 'success'
         responseType.message="pls check email";
    }else{
        responseType.statusText= 'error'
         responseType.message="email not exist ";
    
    }
    res.status(200).json(responseType);
      
    var transporter = nodemailer.createTransport({
        service: 'gmail',
      
        auth: {
            user: 'akashpl.1rn17ec093@gmail.com',
            pass: 'Akashpl@123'
          }
      });
     
    var mailOptions = {
        from: 'akash12@gmail.com',
        to: 'akash111pl@gmail.com',
        subject: 'reset password',
        text:
         `
    Hi [Customer],
    
    your otp is `
    
        
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.send("Email Sent!")
    
    
   
    
    })
    
router.post('/changepassword' ,async(req,res)=>{
        let data=await  otpModel.find({  code:req.body.otpcode,  expireIn:req.body.expireIn})
       
       
       
        const response ={}
        if(data){
            let currentTime=new Date().getTime();
            let diff =data.expireIn -currentTime;
            if(diff<0){
                response.message='token expired'
                response.statusText='error'
    
            }else{
                let user=await catModel.findOne({email:req.body.email})
                user.password=req.body.password;
                user.save();
                response.message="passsword change"
                response.statusText='success';
            }
        }else{
      
            response.message="invalid error"
                response.statusText='error';
        }
    
        res.status(200).json(response);


       
    
    })
       



router.get("/list",(req,res)=>{
    catModel.find({},(err,data)=>{
        if(err) throw err;
        else{
        res.send('user data saved')
        }
    })
})


router.post('/addpost',(req,res)=>{
   
     console.log(req.body)
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let address=req.body.address;
    let pass=req.body.pass;
    let data=[]
    
    //insert data
    let ins=new catModel({name:name,email:email,phone:phone,address:address,pass:pass,data:[]});
    ins.save((err)=>{
        if(err){ res.send("Already Added")}
       
    })
})
router.post("/insertmenu",(req,res)=>{
    let pid=req.body.pid;
    let name=req.body.name;
    let path=req.body.path;
    let price=req.body.price;
    let size=req.body.size;
    let ins=new menuModel({pid:pid,name:name,path:path,price:price,size:size});
    ins.save((err)=>{
        if(err){ res.send("Already Added")}
        else{
        res.send("Category Added");
        }
    })
})

router.get("/getpost", (req, res) => {
    menuModel.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.send(data)
        }
    })
})
router.post('/order', (req, res) => {

   
    let insert2 = new orderModel({
        details: req.body.details,
        price: req.body.price,
        status: req.body.status,
      
    })
    console.log(insert2, "line 15")

    insert2.save((e) => {
        console.log(e)
        if (e) {
            res.send("Already added")
        }
        else {
            res.send("category added")
            
        }

    })
})
router.get("/allorders", (req, res) => {
    orderModel.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.send(data)
        }
    })
})
router.get("/fetchtable", (req, res) => {
    table.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.send(data)
        }
    })
})

router.post('/email', async (req,res)=>{
        
    var transporter = nodemailer.createTransport({
    service: 'gmail',
  
    auth: {
        user: 'akashpl.1rn17ec093@gmail.com',
        pass: 'Akashpl@123'
      }
  });
  
  var mailOptions = {
    from: 'akash12@gmail.com',
    to: 'akash111pl@gmail.com',
    subject: 'Your Order Has been Placed Successfully!!',
    text:
     `
Hi [Customer],

Thank you so much for your support `

    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.send("Email Sent!")
})

module.exports=router;


//post
//http://localhost:8000/api/posts/addpost

//to get the data 

//http://localhost:8000/api/posts/fetchpost