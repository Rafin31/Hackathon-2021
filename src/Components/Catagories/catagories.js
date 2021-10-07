import React, { useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import { CaragoriesData } from './data.js';
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Catagories() {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="courses conatiner-fluid">
            <div className="heading">
                <h3 className="main-heading text-center fw-bold">Popular Catagories</h3>
            </div>
            <div className="row justify-content-center text-center courses_row">
                {CaragoriesData.map((item, index) => {
                    return (
                        <div className="col-10 col-lg-4 col-xxl-4 container_courses card text-center" data-aos="flip-left" data-aos-duration="2000">
                            <span className="icon">{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.Dec}</p>
                            <Link className=" Link">Read more <AiIcons.AiOutlineArrowRight /> </Link>
                        </div>
                    );
                })}

            </div>
            <div className="col-12 text-center">
                <button className="course_button" data-aos="fade-up" data-aos-duration="2000">Find More Courses</button>
            </div>
        </div>
    );
}

export default Catagories;