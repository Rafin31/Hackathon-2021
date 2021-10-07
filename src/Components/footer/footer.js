import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <div>
            <div className="container-fluid">
                <div className="footer">
                    <div className="row justify-content-center footer_con ">
                        <div className="col-5 col-md-5" data-aos="fade-up" data-aos-duration="2000">
                            <input type="text" className="footerinput" placeholder="Email" />
                            <button className="subscibe">Subscribe</button>
                        </div>
                        <div className="col-5 col-md-5">
                            <div className="footer_head text-light"><h5>Get in Touch</h5></div>
                            <Link data-aos="fade-left" data-aos-duration="2000" to="#" class="fa fa-facebook"></Link>
                            <Link data-aos="fade-left" data-aos-duration="2000" to="#" class="fa fa-twitter"></Link>
                            <Link data-aos="fade-left" data-aos-duration="2000" to="#" class="fa fa-google"></Link>
                            <Link data-aos="fade-right" data-aos-duration="2000" to="#" class="fa fa-linkedin"></Link>
                            <Link data-aos="fade-right" data-aos-duration="2000" to="#" class="fa fa-youtube"></Link>
                            <Link data-aos="fade-right" data-aos-duration="2000" to="#" class="fa fa-instagram"></Link>
                        </div>
                    </div>


                    <div className="row justify-content-center footer_bootom">
                        <div className="col-2" data-aos="fade-up" data-aos-duration="2000">
                            <h5 className="heading">About us</h5>
                            <ul>
                                <li>
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2" data-aos="fade-up" data-aos-duration="2000">
                            <h5 className="heading">Enroll</h5>
                            <ul>
                                <li>
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2" data-aos="fade-up" data-aos-duration="2000">
                            <h5 className="heading">Study</h5>
                            <ul>
                                <li>
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2" data-aos="fade-up" data-aos-duration="2000" >
                            <h5 className="heading">Support</h5>
                            <ul>
                                <li>
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link><br />
                                    <Link className="Links">Link1</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="text-light" />

                    <div className="bottom col-12" data-aos="fade-up" data-aos-duration="2000">
                        <p className="text-center text-light">All right reserved @ Topsy-Turvy-3.0 2021</p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Footer;