import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import { Coursedata } from './coursesdata';

function Courses() {
    return (
        <div className="courses conatiner-fluid" id="courses">
            <div className="heading">
                <h3 className="main-heading text-center fw-bold">Popular Courses</h3>
            </div>
            <div className="row justify-content-center text-center popular_courses">
                {Coursedata.map((item, index) => {
                    return (
                        <div className="col-10 col-lg-4 col-xxl-4 card text-center courses" data-aos="fade-up" data-aos-duration="2000" data-aos-delay={index * 150}>
                            <img class="card-img-top" src={item.images} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">{item.title}</h4>
                                <p class="card-text">{item.Description}.</p>
                                <a href="#" class="btn btn-primary">Enroll</a>
                            </div>

                        </div>
                    );
                })}
            </div>
            <div className="col-12 text-center">
                <button className="course_button" data-aos="fade-up" data-aos-duration="2000" >Find More Courses</button>
            </div>
        </div>
    );



}

export default Courses;