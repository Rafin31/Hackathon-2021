import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';

function Statistics(props) {
    return (
        <div className="container-fluid stats" data-aos="fade-up" data-aos-duration="2000">
            <div className="box box1">
                <MdIcons.MdSchool />
                <h3>456+</h3>
                <h5>Courses</h5>
            </div>
            <div className="box box2">
                <FaIcons.FaSchool />
                <h3>56+</h3>
                <h5>Institution</h5>
            </div>
            <div className="box box3">
                <FaIcons.FaUserGraduate />
                <h3>2546+</h3>
                <h5>Students</h5>
            </div>
            <div className="box box4">
                <FaIcons.FaChalkboardTeacher />
                <h3>456+</h3>
                <h5>Teacher</h5>
            </div>
        </div>
    );
}

export default Statistics;