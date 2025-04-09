import React from "react";
import { toAbsoluteUrl } from "../../../../../../_metronic/helpers";
import { Field } from "formik";

const PublicContact = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between h-100 bg-dark">
        <div className='text-end w-50 d-flex align-items-center justify-content-center'>
          <img src={toAbsoluteUrl('/media/stock/600x600/img-28.jpg')} width={'100%'} alt="" />
        </div>
        <div className="text-muted w-50 px-lg-20">
          <h1 className='display-2 text-primary'>Get In Touch</h1>
          <p className='mb-8 w-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, neque! Aliquid totam a sint commodi.</p>
          <form className="w-75">
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary fw-bolder">Full Name</label>
              <input type="text" className="form-control" placeholder="Enter Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary fw-bolder">Email</label>
              <input type="text" className="form-control" placeholder="Enter Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-primary fw-bolder">Your Message</label>
              <textarea rows={10} className="form-control" placeholder="Your Message..." />
            </div>
            <div>
              <button className="btn btn-success"><i className="fa fa-message"></i> Send</button>
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}

export default PublicContact