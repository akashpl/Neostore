import { fontSize } from '@mui/system';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.css'
import NavigationBar from './NavigationBar';




const slideImages = [
    'h1.jpg',
    'h2.jpg',
    'h3.jpg',
    "h4.jpg",
    'h5.jpg'
];

const Home = () => {











    return (
        <>

            <NavigationBar />

            <div>
                <Slide easing="ease">
                    <div className="each-slide" href='menu'>
                        <div className='images' style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                            <span href='product'>Shop Now</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='images' href='menu' style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                            <span >Shop Now</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='images'  href='menu' style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                            <span >Shop Now</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='images' href='menu' style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                            <span >Shop Now</span>
                        </div>
                    </div>
                    <div className="each-slide">
                        <div className='images' style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
                            <span>Shop Now</span>
                        </div>
                    </div>
                </Slide>
            </div>











            <div class="container-fluid">

                <div class="row">
                    <div class="col-sm-4" style={{ backgroundColor: "lightblue" }}>
                        <p style={{ color: "red", fontSize: "20px" }}><b>Latest products</b></p>
                    </div>
                    <div class="col-sm-4" style={{ backgroundColor: "pink" }}>
                        <p> NeW Arrivals</p>
                    </div>
                    <div class="col-sm-4" style={{ backgroundColor: "lightblue" }}>
                        <p> 50% discount</p>
                    </div>
                    <div class="col-sm-4" style={{ backgroundColor: "lightblue" }}>

                    </div>

                </div>
            </div>









            <div>

                <div class="container">
                    <div class="row">
                        <div class="footer-col">
                            <h4>company</h4>
                            <ul>
                                <li><a href="https://drive.google.com/file/d/1Q2PKQJDm3O74YI5R8UeG-tG_aADZvaQN/view?usp=sharing">about us</a></li>
                                <li><a href="#">our services</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">shipping</a></li>
                                <li><a href="https://www.flipkart.com/pages/returnpolicy">returns</a></li>
                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>online shop</h4>
                            <ul>
                                <li><a href="https://www.google.com/maps/dir/Bengaluru,+Karnataka/NeoSoft+Technologies+Pvt+Ltd,+No+1,+5th+'A'+Block,+Koramangala,+Bengaluru,+Karnataka+560034/@12.9480009,77.5718903,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2m2!1d77.5945627!2d12.9715987!1m5!1m1!1s0x3bae1461cedd72cd:0xaf90c635b8fab72!2m2!1d77.634067!2d12.9248619">Location </a></li>
                                <li><a href="https://drive.google.com/file/d/1Q2PKQJDm3O74YI5R8UeG-tG_aADZvaQN/view?usp=sharing">Support</a></li>

                            </ul>
                        </div>
                        <div class="footer-col">
                            <h4>follow us</h4>
                            <div class="social-links">
                                <a href="https://www.facebook.com/flipkart/"><i class="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/Flipkart?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/flipkart/?hl=en"><i class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/flipkart/?originalSubdomain=in"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
};

export default Home;
