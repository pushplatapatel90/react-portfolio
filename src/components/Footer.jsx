import React, { useContext } from 'react';
import '../css/footer.css';
import * as bs from 'react-icons/bs';
import { ThemeContext } from '../App';

const Footer = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill={theme ? '#000' : '#fff'}
                        fill-opacity="1"
                        d="M0,256L34.3,213.3C68.6,171,137,85,206,80C274.3,75,343,149,411,165.3C480,181,549,139,617,133.3C685.7,128,754,160,823,186.7C891.4,213,960,235,1029,218.7C1097.1,203,1166,149,1234,133.3C1302.9,117,1371,139,1406,149.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
                    </path>
                </svg>
                <div className="container footer-inner">
                    <div className="row justify-content-center">
                        <div className="col-lg-6 col-md-9">
                            <h1 className="mb-3">ABOUT ME</h1>
                            <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores quod inventore sed ut, incidunt, dicta a esse alias maxime et soluta praesentium nesciunt. Nisi odio molestiae exercitationem quaerat provident repellendus?</h6>
                            <div className="socials mt-4 justify-content-center">
                                <span><bs.BsFacebook /></span>
                                <span><bs.BsInstagram /></span>
                                <span><bs.BsYoutube /></span>
                                <span><bs.BsLinkedin /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer