"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SocialMediaImg from '../images/social.png';
import logoImg from '../images/design.png';
import brochureImg from '../images/brochure.png';
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import '../styles/provide.css';
import '../styles/test.css';
import Link from 'next/link';

function Provide() {
    const [showSecondCard, setShowSecondCard] = useState(false);
    const [showThirdCard, setShowThirdCard] = useState(false);

    useEffect(() => {
        AOS.init();
        const timer1 = setTimeout(() => {
            setShowSecondCard(true);
            const timer2 = setTimeout(() => {
                setShowThirdCard(true);
            }, 1000);
            return () => clearTimeout(timer2);
        }, 1000);
        return () => clearTimeout(timer1);
    }, []);

    return (
        <>
            <section>
                <div className="main-width">
                    <div className="under-1320">
                        <div className="all-padding">
                        <div className="provide-container">
                            <div className="heading">
                                <p className='title'>What We Provide</p>
                            </div>
                            <div className="provide-card-container ">
                                <div className="provider-card btn-style700 " data-aos="fade-up" data-aos-duration="1000">
                                    <div className="radius">
                                        <Image className="provider-icons" src={SocialMediaImg} alt="Social Media Post" />
                                        <div className="provider-card-desc">
                                            <div className="card-title">
                                                Social Media Post
                                            </div>
                                            <p className='text-provide'>Boost your brand&apos;s presence with social media expertise.</p>
                                            <Link href="/services" className="style-none">
                                            <div className="learn-more">
                                                Learn More
                                                <span className="icon">
                                                    <FaArrowRightLong />
                                                </span>
                                            </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {showSecondCard && (
                                    <div className="provider-card" data-aos="fade-up" data-aos-duration="1500">
                                        <div className="radius">
                                            <Image className="provider-icons" src={logoImg} alt="Logo Design" />
                                            <div className="provider-card-desc">
                                                <div className="card-title">
                                                    Logo Design
                                                </div>
                                                <p className='text-provide'>Design a unique logo that defines your brand.</p>
                                                <Link href="/logodesign" className="style-none">
                                                <div className='learn-more'>
                                                    Learn More
                                                    <span className="icon">
                                                        <FaArrowRightLong />
                                                    </span>
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {showThirdCard && (
                                    <div className="provider-card" data-aos="fade-up" data-aos-duration="2500">
                                        <div className="radius">
                                            <Image className="provider-icons" src={brochureImg} alt="Brochure Design" />
                                            <div className="provider-card-desc">
                                                <div className="card-title">
                                                    Brochure Design
                                                </div>
                                                <p className='text-provide'>Create professional brochures that captivate your audience.</p>
                                                <Link href="/brochure" className="style-none">
                                                <div className='learn-more'>
                                                    Learn More
                                                    <span className="icon">
                                                        <FaArrowRightLong />
                                                    </span>
                                                </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Provide;
