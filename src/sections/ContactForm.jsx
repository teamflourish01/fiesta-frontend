import React from 'react';
import '../styles/contactform.css';
import { FaChevronDown } from 'react-icons/fa';


function ContactForm() {
  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
            <div className="contact-container" id="contact">
              <div className="heading">
                <p className='title ' >Contact Us</p>
              </div>
              <div className="contact-content-container">
                <div className="contact-text">
                  <p className='call-back'>Request a Call Back</p>
                  <p className='book-consultation'>Book a free consultation call with our top-rated Graphic Design soldiers</p>
                </div>
                <div className="contact-form">
                  <div className="name-contact-row">
                    <div className="input-field name-contact">
                      <div className="input-group name-contact-input">
                        <input type="text" className="input" placeholder='Name'/>
                      </div>
                    </div>
                    <div className="input-field name-contact">
                      <div className="input-group name-contact-input">
                        <input type="text" className="input" placeholder='Phone Number' />
                      </div>
                    </div>
                  </div>
                  <div className="name-contact-row">
                    <div className="input-field name-contact">
                      <div className="input-group name-contact-input">
                        <input type="text" className="input" placeholder='Email'/>
                      </div>
                    </div>
                    <div className="input-field name-contact">
                      <div className="input-group name-contact-input">
                        <select className="input-dropdown">
                            <option value="">Select Service</option>
                            <option value="web-design">Social Media management</option>
                            <option value="graphic-design">Logo Design</option>
                            <option value="seo">Brochure Design</option>
                          </select>
                      </div>
                    </div>
                  </div>
                  <div className="email-row">
                    <div className="input-field">
                      <div className="input-group">
                        <input type="text" className="input" placeholder='Whatsapp Number' />
                      </div>
                    </div>
                  </div>
                  <div className="message-row">
                    <div className="input-field">
                      <div className="input-group">
                        <textarea className="input" placeholder='Message' />
                      </div>
                      <div className='contact-button'>
                    <button type='submit' className="btn-contact">Submit</button>
                    </div>
                    </div>
                  </div>
                 
                </div>
                
                 
              </div>
            </div>
</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
