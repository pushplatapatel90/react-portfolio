import React from 'react'
import '../css/contact.css';

const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="contact">
                    <div className="heading mb-4">
                        <span>Get In Touch</span>
                    </div>
                    <div className="col-lg-6 col-md-8 col-10">
                        <div className="form-group">
                            <input type="text" name="" id="" className='form-control' placeholder='name' />
                        </div>
                        <div className="form-group">
                            <input type="email" name="" id="" className='form-control' placeholder='email' />
                        </div>
                        <div className="form-group">
                            <input type="text" name="" id="" className='form-control' placeholder='Contact No.' />
                        </div>
                        <div className="form-group">
                            <textarea name="" id="" rows={7} className='form-control' placeholder='Write a message..'></textarea>
                        </div>
                        <button className='btn-blue mt-5 shadow-lg f-btn justify-content-center'>Message</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact