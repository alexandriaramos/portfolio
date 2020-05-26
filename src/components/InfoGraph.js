import React from 'react';
import classname from 'classname';

import Row from './Row';

export default function InfoGraph() {
    return (
        <section className="section">
            <div className="container">
                <Row className={classname('justify-content-between')}>
                    <div className="col-lg-6">
                        <div className="sm-title m-35px-b md-m-20px-b">
                            <h6>Experience Skill</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="skill-lt">
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="92" aria-valuemin="0" aria-valuemax="100">
                                    <h6>HTML5</h6>
                                    <span>92%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-lt">
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100">
                                    <h6>WordPress</h6>
                                    <span>75%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-lt">
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="86" aria-valuemin="0" aria-valuemax="100">
                                    <h6>Magento</h6>
                                    <span>86%</span>
                                </div>
                            </div>
                        </div>
                        <div className="skill-lt">
                            <div className="skill-bar">
                                <div className="skill-bar-in theme-bg" role="progressbar" aria-valuenow="88" aria-valuemin="0" aria-valuemax="100">
                                    <h6>UI/UX</h6>
                                    <span>88%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 md-m-50px-t counter">
                        <div className="sm-title m-35px-b md-m-20px-b">
                            <h6>Language skill</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <Row>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-3 media align-items-center">
                                    <div className="icon percent">
                                        <span className="count" data-to="100" data-speed="100">100</span>
                                    </div>
                                    <div className="media-body">
                                        <h5>German</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-3 media align-items-center">
                                    <div className="icon percent">
                                        <span className="count" data-to="70" data-speed="70">70</span>
                                    </div>
                                    <div className="media-body">
                                        <h5>Spanish</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-3 media align-items-center">
                                    <div className="icon percent">
                                        <span className="count" data-to="90" data-speed="90">90</span>
                                    </div>
                                    <div className="media-body">
                                        <h5>English</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 m-15px-tb">
                                <div className="feature-box-3 media align-items-center">
                                    <div className="icon percent">
                                        <span className="count" data-to="50" data-speed="50">50</span>
                                    </div>
                                    <div className="media-body">
                                        <h5>Latin</h5>
                                    </div>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </div>
        </section>
    );
}
