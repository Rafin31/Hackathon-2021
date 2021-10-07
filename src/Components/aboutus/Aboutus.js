import React from 'react';
import { useEffect, useRef } from 'react';
import lottie from "lottie-web";

function Aboutus(props) {

    const container = useRef(null)

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./learning-concept.json')
        })
    }, [])

    return (
        <div>
            <div className="heading">
                <h3 className="main-heading text-center fw-bold" data-aos="fade-up" data-aos-duration="2000">About Us</h3>
            </div>
            <div className="container-fluid ">
                <div className="row justify-content-center aboutus">
                    <div className="col-5 col-md-5" data-aos="fade-right" data-aos-duration="2000">
                        <div className="head text-center"><h4>About Education-X</h4></div>
                        <div className="bottom">
                            <p className="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus tenetur molestiae quaerat ullam possimus non cupiditate soluta ut veniam praesentium ea, facilis veritatis explicabo eveniet iusto dolorum eaque odit itaque maxime perspiciatis illo? Dolorem at facere dicta in enim explicabo laborum nam tempore molestiae maxime numquam id, cumque porro esse ut impedit assumenda ad voluptatibus necessitatibus laudantium! Similique sed, illum iure perferendis veniam vero aut animi, dolore quae quibusdam nam expedita officiis sequi voluptates nesciunt numquam nihil quisquam laudantium, optio distinctio tempore quod doloribus! Odit excepturi quas iusto consequuntur asperiores sequi culpa, facilis laboriosam quia dignissimos ex vel id porro!
                            </p>
                        </div>
                    </div>
                    <div className="col-5 col-md-5" ref={container} data-aos="fade-left" data-aos-duration="2000"></div>
                </div>
            </div>
        </div>

    );
}

export default Aboutus;