"use client";

import React, { useEffect, useRef } from "react";
import "../styles/homesection.css";
import "../styles/about.css";
import ajay from "../images/ajay.png";
import closeImage from "../images/closeImage.png";
import Image from "next/image";
import Link from "next/link";

const Homesection = () => {
  const mainImageRef = useRef(null);

  useEffect(() => {
    const handleAnimation = () => {
      if (mainImageRef.current) {
        setTimeout(() => {
          mainImageRef.current.classList.add("jump");
        }, 2000);
      }
    };

    handleAnimation();
  }, []);

  return (
    <>
      <section>
        <div className="main-width">
          <div className="under-1320">
            <div className="all-padding home">
              <div className="destination-container">
                <div className="destination-flex">
                  <div
                    className="destination-right"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  >
                    <p className="Graphic">
                      Destination of All Your Graphic Design Needs
                    </p>
                    <p className="care">
                      We take care of all your design needs so you can feel
                      relaxed about your business
                    </p>
                    <Link className="links" href="/contact/#contact">
                      <button className="c-button c-button--gooey">
                      Request Proposal 

                        <div className="c-button__blobs">
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                      </button>
                    </Link>
                  </div>
                  <div
                    className="destination-left"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    <Image
                      src={ajay}
                      alt=""
                      className="main-image"
                      ref={mainImageRef}
                    />
                    <div className="round-img"></div>
                    <div className="top-round"></div>
                    <div className="s-round"></div>
                    <Image
                      src={closeImage}
                      alt=""
                      className="corner-image top-right rotating"
                    />
                    <Image
                      src={closeImage}
                      alt=""
                      className="corner-image bottom-left rotating"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>

      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: "0", width: "0" }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "block", height: "0", width: "0" }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            ></feGaussianBlur>
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            ></feColorMatrix>
            <feBlend in="SourceGraphic" in2="goo"></feBlend>
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Homesection;
