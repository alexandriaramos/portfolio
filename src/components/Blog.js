import React from 'react';
import classname from 'classname';

import Row from './Row';
import { getImageSource } from '../helpers';

export default function Blog() {
    return (
        <section id="blog" className="section dark-section">
            <div className="container">
                <Row className={classname('sm-m-25px-b', 'm-35px-b')}>
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Latest Blogs</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src={getImageSource('blog-1.jpg')} title="" alt="" />
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src={getImageSource('blog-1.jpg')} title="" alt=""/>
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar 2019</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 m-15px-tb">
                        <div className="blog-grid">
                            <div className="blog-grid-img">
                                <a href="#">
                                    <img src={getImageSource('blog-1.jpg')} title="" alt=""/>
                                </a>
                            </div>
                            <div className="blog-gird-info">
                                <div className="b-meta">
                                    <span className="date">02 Mar 2019</span>
                                    <span className="meta">Design</span>
                                </div>
                                <h5><a href="#">Make your Marketing website</a></h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <div className="btn-grid">
                                    <a className="m-btn-link" href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </section>
    );
}
