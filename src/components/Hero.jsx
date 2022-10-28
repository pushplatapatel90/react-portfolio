import React, { useState } from 'react'
import * as fa from 'react-icons/fa';
import * as bs from 'react-icons/bs';
import '../css/navbar.css';
import '../css/hero.css';
import { ThemeContext } from '../App';
import { useContext } from 'react';

const Hero = () => {
    const [navbar, setNavbar] = useState(false);
    const [toggle, setToggle] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleNavbar = () => {
        setToggle(!toggle);
    }

    const changeBackground = () => {
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <section className="hero">
                {/* navbar */}
                <nav className={navbar ? 'navbar active' : 'navbar'}>
                    <div className="logo">
                        <span>Portfolio</span>
                    </div>
                    <div className={toggle ? 'navbar-toggle nav-items' : 'nav-items'}>
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>Services</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li onClick={toggleTheme} style={{ fontSize: '1.3rem' }}><bs.BsMoonStars /></li>
                        </ul>
                    </div>
                    {/* right */}
                    <div className="right-nav">
                        <a href="" download>
                            <button className='btn download'>Download CV</button>
                        </a>
                        <div className="toggle" onClick={toggleNavbar}>
                            <fa.FaBars />
                        </div>
                    </div>
                </nav>

                {/* end of navbar */}

                {/* hero section inner */}
                <div className="intro" data-aos="fade-right">
                    <div className="details">
                        <span>I am Sarah Wich</span>
                        <span>A Web Designer</span>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore explicabo voluptatum <br /> praesentium id et accusantium tempora modi magnam  commodi maiores blanditiis<br /> laboriosam totam, mollitia, in, repellat dicta autem molestias.</span>
                    </div>
                    <div className="buttons mt-md-5 mt-4">
                        <button className="btn-blue">Projects <bs.BsArrowRight /></button>
                        <button className="btn-white">Projects <bs.BsArrowRight /></button>
                    </div>
                    <div className="socials mt-md-5 mt-4">
                        <span>
                            <bs.BsFacebook />
                        </span>
                        <span>
                            <bs.BsInstagram />
                        </span>
                        <span>
                            <bs.BsYoutube />
                        </span>
                        <span>
                            <bs.BsLinkedin />
                        </span>
                        <span>
                            <bs.BsTwitter />
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero