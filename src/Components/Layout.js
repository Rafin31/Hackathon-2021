import React, { useEffect, useRef } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import TweenMax from 'gsap';
import { Power3 } from 'gsap';
import lottie from "lottie-web";
import Navbar from './Navbar/Navbar';
import Catagories from './Catagories/catagories';
import Statistics from './statistics/statistics';
import Courses from './Courses/Courses.js'
import Partners from './partners/Partners';
import Aboutus from './aboutus/Aboutus';
import Footer from './footer/footer';
import Aos from 'aos';
import 'aos/dist/aos.css';


function Layout() {

    const container = useRef(null)

    useEffect(() => {

        Aos.init();

        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../Asset/education.json')
        })
    }, [])

    return (
        <>
            <Navbar />
            <div className="fixed">
            </div>
            <div className="container-fluid banner">
                <div className="row justify-content-center banner_row" data-aos="fade-right" data-aos-duration="2000">
                    <div className="col-md-5 left">
                        <h3>Welcome to Bangladesh first <span>Education-X</span> Platform</h3>
                        <p className="h5">Your dream institutions are now on your phone</p>
                        <input className="inputText" type="Text" placeholder="Your Email" />
                        <button className="button">Subscribe</button>

                    </div>
                    <div className="col-md-5 right" ref={container} data-aos="fade-left" data-aos-duration="2000">
                    </div>
                </div>
            </div>
            <Catagories />
            <Statistics />
            <Courses />
            <Partners />
            <Aboutus />
            <Footer />
        </>


    );
}

export default Layout;