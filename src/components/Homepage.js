import React from "react";
import "../styles/bootsnav.css";
// import "../styles/bootstrap.min.css";
import "../styles/flaticon.css";
import "../styles/font-awesome.min.css";
import "../styles/animate.css";
import "../styles/slick.css";
import "../styles/slick-theme.css";
import "../styles/style.css";
import NavBar from "./NavBar";
import { MdOutlineSchool } from "react-icons/md";
import { Button } from "react-bootstrap";

export default function Homepage() {
    return (
        <>
        
            
            

            
            <section className="top-area">
                <div className="header-area">
                    
                <NavBar/>
                    
                </div>
                <div className="clearfix"></div>

            </section>
            

            
            <section id="home" className="welcome-hero">
                <div className="container">
                    <div className="welcome-hero-txt">
                        <h2 className="homepage-headers">Here To Unite</h2>
                        <p>
                            Connecting donors with organizations & people in need
                        </p>
                    </div>
                    <Button className="donate-btn" onClick={() => {window.location.href="/ViewDonationRequests"}}>Donate Now</Button>
                </div>

            </section>
            

            
            <section id="list-topics" className="list-topics">
                <div className="container">
                    <div className="list-topics-content">
                        <ul className="center">
                            <a className="homepage-anchors" href="/ViewDonationRequests?category=Medical_Supplies">
                                <li>
                                    <div className="single-list-topics-content">
                                        <div className="single-list-topics-icon">
                                            <i className="icon icon-hospital"></i>
                                        </div>
                                        <h2 className="homepage-headers"><a className="homepage-anchors" href="#">Medical Supplies</a></h2>
                                        <p>200 listings</p>
                                    </div>
                                </li>
                            </a>
                            <a className="homepage-anchors" href="/ViewDonationRequests?category=School_Supplies">
                                <li>
                                    <div className="single-list-topics-content">
                                        <div className="single-list-topics-icon">
                                            <i className="icon icon-school"></i>
                                        </div>
                                        <h2 className="homepage-headers"><a className="homepage-anchors" href="#">Schools</a></h2>
                                        <p>150 listings</p>
                                    </div>
                                </li>
                            </a>
                            <a className="homepage-anchors" href="/ViewDonationRequests?category=Places_of_Worship">
                                <li>
                                    <div className="single-list-topics-content">
                                        <div className="single-list-topics-icon">
                                            <i className="icon icon-mosque"></i>
                                        </div>
                                        <h2 className="homepage-headers"><a className="homepage-anchors" href="#">Places of Worship</a></h2>
                                        <p>214 listings</p>
                                    </div>
                                </li>
                            </a>
                            
                            <a className="homepage-anchors" href="/ViewDonationRequests?category=Orphanages">
                                <li>
                                    <div className="single-list-topics-content">
                                        <div className="single-list-topics-icon">
                                            <i className="icon icon-orphanage"></i>
                                        </div>
                                        <h2 className="homepage-headers"><a className="homepage-anchors" href="#">Orphanage</a></h2>
                                        <p>120 listings</p>
                                    </div>
                                </li>
                            </a>
                            <a  href="/ViewDonationRequests?category=">
                                <li>
                                    <div className="single-list-topics-content">
                                        <div className="single-list-topics-icon">
                                            <i className="icon icon-non-profit"></i>
                                        </div>
                                        <h2 className="homepage-headers"><a href="#">Non-Profits</a></h2>
                                        <p>120 listings</p>
                                    </div>
                                </li>
                            </a>
                            
                        </ul>
                    </div>
                </div>

            </section>
            

            
            
            

            
            
            

            
            
           

            
            <section id="statistics" className="statistics">
                <div className="container">
                    <div className="statistics-counter row">
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">90 </div> <span>K+</span>
                                </div>
                                <h3 className="homepage-headers">listings</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">40</div> <span>k+</span>
                                </div>
                                <h3 className="homepage-headers">listing categories</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">65</div> <span>k+</span>
                                </div>
                                <h3 className="homepage-headers">visitors</h3>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="single-ststistics-box">
                                <div className="statistics-content">
                                    <div className="counter">50</div> <span>k+</span>
                                </div>
                                <h3 className="homepage-headers">happy clients</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            

            
            

            <section id="contact" className="subscription">
                <div className="container">
                    <div className="subscribe-title text-center">
                        <h2 className="homepage-headers">
                            do you want to add your organization listing with us?
                        </h2>
                        <p>
                            Add your organization listing with us and get more exposure
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="subscription-input-group">
                                <form action="#">
                                    <input type="email" className="subscription-input-form" placeholder="Enter your email here" />
                                    <Button className="appsLand-btn subscribe-btn"  onclick="window.location.href='/signup'">create account</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            

            
            <footer id="footer" className="footer">
                <div className="container">
                    <div className="footer-menu">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="navbar-header">
                                    <a className="navbar-brand" href="/">ZOMA</a>
                                </div>
                            </div>
                            <div className="col-sm-9">
                                <ul className="footer-menu-item">
                                    <li className="scroll"><a href="#works">how it works</a></li>
                                    <li className="scroll"><a href="#explore">explore</a></li>
                                    <li className="scroll"><a href="#reviews">review</a></li>
                                    <li className="scroll"><a href="#blog">blog</a></li>
                                    <li className="scroll"><a href="#contact">contact</a></li>
                                    <li className=" scroll"><a href="#contact">my account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hm-footer-copyright">
                        <div className="row">
                            <div className="col-sm-7">
                                <div className="footer-social">
                                    <span><i className="fa fa-phone"> +1  (222) 777 8888</i></span>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                    <a href="#"><i className="fa fa-linkedin"></i></a>
                                    <a href="#"><i className="fa fa-google-plus"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="scroll-Top">
                    <div className="return-to-top">
                        <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
                    </div>

                </div>

            </footer>

            <script src="assets/js/jquery.js"></script>

            

  
        </>
    );
}
