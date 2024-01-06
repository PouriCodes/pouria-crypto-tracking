import React from 'react';
import contactImg from '../assets/images/contact.png';

const ContactUsPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 bg-info p-3 rounded">
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-7">
          <div className="mt-3">
            <h3 className="text-primary">How to contact us?</h3>
            <h5>+989197890054</h5>
            <h5>+982634444425</h5>
            <h5>pouria.yerevan@gmail.com</h5>
          </div>
          <div className="mt-3">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="please type your name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="please type your message"
              />
            </div>
            <button className="btn btn-outline-primary ms-3">Send</button>
          </div>
        </div>
        <div className="col-md-5 text-center">
          <img src={contactImg} alt="about" className="img-fluid about-img" />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
