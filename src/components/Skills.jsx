import React from 'react';
import profile from '../images/profile.png';
import '../css/skills.css';

const Skills = () => {
    return (
        <>
            <section>
                <div className="container-lg container-fluid">
                    <div className="skills row mx-auto align-items-center">
                        <div className=" col-md-6">
                            <div className="s-left" data-aos="fade-up">
                                <img src={profile} alt="profile" />
                            </div>
                        </div>
                        <div className="s-right col-md-6" data-aos="fade-left">
                            <h3>Skills</h3>
                            <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias eius tenetur, nostrum deleniti cum ipsum minus fugit corrupti! Perspiciatis, ipsa. In, facere. Totam id sit aut laborum cum. Sint, aliquam!</span>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="" className='mb-3 fw-bold'>Photoshop</label>
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className='mb-3 fw-bold'>HTML</label>
                                    <div className="progress">
                                        <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="" className='mb-3 fw-bold'>CSS</label>
                                    <div className="progress">
                                        <div className="progress-bar w-100" role="progressbar" aria-valuenow="100"></div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className='mb-3 fw-bold'>React JS</label>
                                    <div className="progress">
                                        <div className="progress-bar w-100" role="progressbar" aria-valuenow="100"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills