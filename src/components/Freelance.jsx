import React from 'react';
import upwork from '../images/upwork.png';
import facebook from '../images/facebook.png';
import amazon from '../images/amazon.png';
import fiverr from '../images/fiverr.png';
import shopify from '../images/shopify.png';
import '../css/freelance.css';

const Freelance = () => {
    return (
        <>
            <div className="container-lg container-fluid">
                <div className="row freelance mx-auto">
                    <div className="col-md-6 f-left">
                        <span>Works for all these</span>
                        <span>Brands & Clients</span>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus corporis illum nobis nesciunt cupiditate necessitatibus ab odio vitae eaque in. Quo qui quia iusto neque ipsum asperiores at a amet.</span>
                        <button className='btn-blue mt-5 shadow-lg f-btn'>Services</button>
                    </div>
                    <div className="col-md-6 f-right" data-aos="zoom-in">
                        <div className="main-circle shadow-lg">
                            <div className="sec-circle">
                                <img src={upwork} alt="upwork" />
                            </div>
                            <div className="sec-circle">
                                <img src={facebook} alt="facebook" />
                            </div>
                            <div className="sec-circle">
                                <img src={fiverr} alt="fiverr" />
                            </div>
                            <div className="sec-circle">
                                <img src={shopify} alt="shopify" />
                            </div>
                            <div className="sec-circle">
                                <img src={amazon} alt="amazon" />
                            </div>
                        </div>
                        <div className="orange-circle"></div>
                        <div className="blue-circle"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Freelance