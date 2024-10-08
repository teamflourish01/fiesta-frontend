"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import "../styles/contactform.css";
import "../styles/about.css";

import { FaChevronDown } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function ContactForm() {
  const [detail, setDetail] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    message: "",
    service: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail({ ...detail, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      let data = await fetch("https://api.fiestadesign.in/user/add", {
        method: "POST",
        body: JSON.stringify(detail),
        headers: {
          "Content-Type": "application/json",
        },
      });
      data = await data.json();
      setIsLoading(false);

      // SweetAlert2 success message
      Swal.fire({
        title: "Success!",
        text: "Submit Successfully",
        icon: "success",
        confirmButtonText: "OK",
      });

      setDetail({
        name: "",
        email: "",
        phone: "",
        whatsapp: "",
        message: "",
        service: "",
      });
      console.log(data);
    } catch (error) {
      console.log(error);

      // SweetAlert2 error message
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
      setIsLoading(false);
    }
  };

  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
              <div className="contact-container" id="contact">
                <div className="heading">
                  <p className="title ">Contact Us</p>
                </div>
                <div className="contact-content-container">
                  <div className="contact-text">
                    <p className="call-back">Request a Call Back</p>
                    <p className="book-consultation">
                      Book a Free Consultation Call with Our Top-rated Graphic
                      Design Soldiers
                    </p>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="contact-form">
                      <div className="name-contact-row">
                        <div className="input-field name-contact">
                          <div className="input-group name-contact-input">
                            <input
                              type="text"
                              className="input"
                              placeholder="Name"
                              required
                              name="name"
                              onChange={(e) => handleChange(e)}
                              value={detail.name}
                            />
                          </div>
                        </div>
                        <div className="input-field name-contact">
                          <div className="input-group name-contact-input">
                            <input
                              type="text"
                              className="input"
                              placeholder="Phone Number"
                              name="phone"
                              required
                              onChange={(e) => handleChange(e)}
                              value={detail.phone}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="name-contact-row">
                        <div className="input-field name-contact">
                          <div className="input-group name-contact-input">
                            <input
                              type="email"
                              className="input"
                              placeholder="Email"
                              name="email"
                              required
                              onChange={(e) => handleChange(e)}
                              value={detail.email}
                            />
                          </div>
                        </div>
                        {/* <div className="input-field name-contact">
                      <div className="input-group name-contact-input">
                        <select className="input-dropdown" name="service" onChange={(e)=>handleChange(e)}  >
                            <option value="">Select Service</option>
                            <option value="Social Media management">Social Media management</option>
                            <option value="Logo Design">Logo Design</option>
                            <option value="Brochure Design">Brochure Design</option>
                          </select>
                      </div>
                    </div> */}

                        <div className="input-field name-contact">
                          <div className="input-group name-contact-input ">
                            {/* <div className=""> */}
                            <select
                              className="input-dropdown"
                              name="service"
                              required
                              onChange={(e) => handleChange(e)}
                            >
                              <option value="">Select Service</option>
                              <option value="Social Media management">
                              Social Media Management
                              </option>
                              <option value="Logo Design">Logo Design</option>
                              <option value="Brochure Design">
                              Brochure Design
                              </option>
                            </select>
                            <span className="arrow-contact">
                              <IoIosArrowDown className="dropdown-icon" />
                            </span>
                            {/* </div> */}
                          </div>
                        </div>
                      </div>
                      <div className="email-row">
                        <div className="input-field">
                          <div className="input-group">
                            <input
                              type="text"
                              className="input"
                              placeholder="Whatsapp Number"
                              name="whatsapp"
                              required
                              onChange={(e) => handleChange(e)}
                              value={detail.whatsapp}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="message-row">
                        <div className="input-field">
                          <div className="input-group">
                            <textarea
                              className="input"
                              placeholder="Message"
                              name="message"
                              required
                              onChange={(e) => handleChange(e)}
                              value={detail.message}
                            />
                          </div>
                          <div className="contact-button">
                            <button type="submit" className="btn-contact">
                              {" "}
                              {isLoading ? (
                                <span>...Please Wait</span>
                              ) : (
                                <span>submit</span>
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
