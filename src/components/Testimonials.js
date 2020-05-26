import React from 'react';
import classname from 'classname';

import Row from './Row';
import { getImageSource } from '../helpers';

export default function Testimonials() {
    return (
        <section className="section">
            <div className="container">
                <Row className={classname('sm-m-25px-b', 'm-35px-b')}>
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Testimonials</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </Row>
                <div className="owl-carousel" data-items="2" data-nav-dots="true" data-md-items="2" data-sm-items="1" data-xs-items="1" data-xx-items="1" data-space="30">
                    <div className="testimonial-col-01">
                        <div className="media">
                            <div className="img">
                                <img src={getImageSource('avatra-1.jpg')} title="" alt="" />
                            </div>
                            <div className="media-body p-25px-l">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="tc-info">
                                    <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                                    <span>Co-founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-col-01">
                        <div className="media">
                            <div className="img">
                                <img src={getImageSource('avatra-1.jpg')} title="" alt="" />
                            </div>
                            <div className="media-body p-25px-l">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="tc-info">
                                    <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                                    <span>Co-founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-col-01">
                        <div className="media">
                            <div className="img">
                                <img src={getImageSource('avatra-1.jpg')} title="" alt="" />
                            </div>
                            <div className="media-body p-25px-l">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="tc-info">
                                    <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                                    <span>Co-founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-col-01">
                        <div className="media">
                            <div className="img">
                                <img src={getImageSource('avatra-1.jpg')} title="" alt="" />
                            </div>
                            <div className="media-body p-25px-l">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <div className="tc-info">
                                    <h6 className="font-alt dark-color font-w-600">Nancy Bayers</h6>
                                    <span>Co-founder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
