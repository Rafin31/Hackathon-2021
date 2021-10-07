import React from 'react';
import { Partnersdata } from './partnersData.js';

function Partners(props) {
    return (
        <div>
            <div className="courses conatiner-fluid Institutions" id="courses">
                <div className="heading">
                    <h3 className="main-heading text-center fw-bold">Institutions</h3>
                </div>
                <div className="row justify-content-center text-center popular_courses">
                    {Partnersdata.map((item, index) => {
                        return (
                            <div className="col-10 col-lg-4 col-xxl-4 card text-center courses " data-aos="fade-right" data-aos-duration="2000" data-aos-delay={index * 100}>
                                <img class="card-img-top" src={item.images} alt="Card image cap" />
                                <div class="card-body">
                                    <h4 class="card-title">{item.title}</h4>
                                    <p class="card-text">{item.Description}.</p>
                                    <a href="#" class="btn btn-primary">Read More</a>
                                </div>

                            </div>
                        );
                    })}
                </div>
                <div className="col-12 text-center">
                    <button className="course_button" data-aos="fade-up" data-aos-duration="2000">More Institutions </button>
                </div>
            </div>
        </div>
    );
}

export default Partners;