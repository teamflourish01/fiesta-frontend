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
    className={`custom-dot ${active ? "custom-dot-active" : "custom-dot-inactive"}`}
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
    appendDots: dots => (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        {dots}
      </div>
    ),
    customPaging: i => (
      <CustomDot active={i === currentSlide} />
    ),
  };

  const testimonials = [
    {
      text: "The team at Fiesta completely transformed our brand's visual identity. Their creativity and attention to detail were exceptional, and the final designs exceeded our expectations. We couldn't be happier with the results.",
      name: "Jigar Rathod",
      position: "Director at Bright Solutions",
    },
    {
      text: "Fiesta's work on our website redesign was outstanding. They truly understood our vision and brought it to life in a way that was both modern and functional.",
      name: "Aisha Khan",
      position: "Marketing Manager at InnovateTech",
    },
    {
      text: "Working with Fiesta was a fantastic experience. Their expertise and dedication were evident in every step of the process. Highly recommend!",
      name: "Michael Brown",
      position: "CEO at Growth Ventures",
    },
    {
      text: "Working with Fiesta was a fantastic experience. Their expertise and dedication were evident in every step of the process. Highly recommend!",
      name: "Michael Brown",
      position: "CEO at Growth Ventures",
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
                <Image src={closeImage} alt="Close Icon" />
                <p className="service">Client’s review of our services</p>
                <Image src={closeImage} alt="Close Icon" />
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
