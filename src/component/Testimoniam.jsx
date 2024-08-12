"use client";
import React, { useState } from "react";
import "../styles/testimoniam.css";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import closeImage from "../images/closeImage.png";

const CustomDot = ({ onClick, active }) => (
  <div
    className={`custom-dot ${
      active ? "custom-dot-active" : "custom-dot-inactive"
    }`}
    onClick={onClick}
  ></div>
);

const Testimoniam = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: (dots) => (
      <div
        style={{ display: "flex", justifyContent: "center", padding: "10px" }}
      >
        {dots}
      </div>
    ),
    customPaging: (i) => <CustomDot active={i === currentSlide} />,
  };

  const testimonials = [
    {
      text: "The team at Fiesta completely transformed our brand's visual identity. Their creativity and attention to detail were exceptional, and the final designs exceeded our expectations. We couldn't be happier with the results",
      name: "Jay Patel",
      position: "Director at Bright Solutions",
    },
    {
      text: "Working with Fiesta was a fantastic experience. Their designers brought our vision to life with exceptional creativity and professionalism. The new graphics have significantly enhanced our marketing materials. Highly recommended!",
      name: "Mayur Savalia",
      position: "CEO at Greenfield Enterprises ",
    },
    {
      text: "The graphic design team at Fiesta delivered eye-catching and engaging designs that perfectly captured our brand's essence. Their work has made a noticeable impact on our customer engagement and overall brand image. Thank you!",
      name: "Paresh Patel",
      position: " Founder at Codercat ",
    },
    {
      text: "Fiesta provides innovative and timely graphic design solutions for our company. Their ability to understand our needs and deliver top-notch designs within tight deadlines was truly impressive. We look forward to collaborating with them again!",
      name: "Sarthak Rathod",
      position: "Founder at Mori Builders ",
    },
  ];

  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding">
              <div className="title-text">
                <div className="tittle-flex">
                  <Image src={closeImage} alt="Close Icon" className="cross" />
                  <p className="service">Client&apos;s Review of Our Services</p>
                  <Image src={closeImage} alt="Close Icon" className="cross" />
                </div>
              </div>
              <div className="transaction-padding">
                <Slider {...settings}>
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="tranformed-container">
                      <div className="tranformed-text">
                        <p className="team">{testimonial.text}</p>
                        <div className="name-padding">
                          <p className="name">{testimonial.name}</p>
                          <p className="position">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimoniam;
