import React from 'react';
import '../../styles/blog.css';
import Image from 'next/image';
import blogImg from '../../images/blog.png';
import Link from 'next/link';


function Page() {
    return (
        <>
            <section>
                <div className="main-width">
                    <div className="under-1320">
                        <div className="all-padding"></div>
                        <div className="blog-container">
                            <div className="heading">
                                <p className='title'>Blog</p>
                            </div>
                            <div className="blog-cards">
                                <div className="blog-card-container">
                                    <div className="blog-img-container">
                                        <Image className="blog-img" src={blogImg} alt="Logo" />

                                    </div>
                                    <div className="blog-content">
                                        <p className='date'> 08.08.2021</p>
                                        <p className='blog-card-title'>Boost Your Brand with Effective Social Media Marketing</p>
                                        <p className='blog-card-text'>In the current virtual world, social media has become a crucial tool for businesses looking to make their attainment...</p>
                                    </div>
                                    <div className="read-more-container">
                                    <Link href="blog/blogsocialmedia" className="read-more">Read More ➔</Link>
                                    </div>
                                </div>
                                <div className="blog-card-container">
                                    <div className="blog-img-container">
                                        <Image className="blog-img" src={blogImg} alt="Logo" />

                                    </div>
                                    <div className="blog-content">
                                        <p className='date'> 08.08.2021</p>
                                        <p className='blog-card-title'>Why Every Successful Brand Starts with a Unique Logo</p>
                                        <p className='blog-card-text'>In the contemporary fiercely competitive business landscape, distinguishing oneself from the multitude has become more critical than ever. An excellent logo stands...</p>
                                    </div>
                                    <div className="read-more-container">
                                    <Link href="blog/bloglogo" className="read-more">Read More ➔</Link>
                                    </div>
                                </div>
                                <div className="blog-card-container">
                                    <div className="blog-img-container">
                                        <Image className="blog-img" src={blogImg} alt="Logo" />

                                    </div>
                                    <div className="blog-content">
                                        <p className='date'> 08.08.2021</p>
                                        <p className='blog-card-title'>Why Professional Brochure and Stationery Design Matters for Your Business</p>
                                        <p className='blog-card-text'>
                                            In the current virtual world, social media has become a crucial tool for businesses
                                            looking to make their attainment, interact with customers, and construct a sturdy brand presence.</p>
                                    </div>
                                    <div className="read-more-container">
                                        <Link href="blog/blogbrochure" className="read-more">Read More ➔</Link>
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

export default Page;
