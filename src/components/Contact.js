import React from 'react';
import classname from 'classname';

import Row from './Row';

export default function Contact() {
    return (
        <section id="contactus" className="section">
            <div className="container">
                <Row className={classname('sm-m-25px-b', 'm-35px-b')}>
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">Get in touch</h3>
                            <p className="text-uppercase small">A Lead UX &amp; UI designer based in Canada</p>
                        </div>
                    </div>
                </Row>
                <Row className={classname('justify-content-center')}>
                    <div className="col-lg-8 m-15px-tb">
                        <div className="contact-form">
                            <h4 className="dark-color font-alt m-20px-b">Say Something</h4>
                            <form id="contact-form" method="POST">
                                <Row>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input name="Subject" id="subject" placeholder="Subject *" className="form-control" type="text" />
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea name="message" id="message" placeholder="Your message *" rows="3" className="form-control"></textarea>
                                            <span className="input-focus-effect theme-bg"></span>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="send">
                                            <button className="m-btn m-btn-theme" onClick="send_mail()" type="button" value="Send"> send message</button>
                                        </div>
                                        <span id="suce_message" className="text-success" style="display: none">Message Sent Successfully</span>
                                        <span id="err_message" className="text-danger" style="display: none">Message Sending Failed</span>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4 m-15px-tb">
                        <div className="contact-info media">
                            <div className="icon">
                                <i className="ti-location-pin"></i>
                            </div>
                            <div className="media-body">
                                <h6 className="dark-color font-alt">Our Address</h6>
                                <p>123 Stree New York City , United States Of America 750065.</p>
                            </div>
                        </div>
                        <div className="contact-info media">
                            <div className="icon">
                                <i className="ti-mobile"></i>
                            </div>
                            <div className="media-body">
                                <h6 className="dark-color font-alt">Our Phone</h6>
                                <p>Office: +004 44444 44444<br />
                                    Office: +004 44444 44444<br /></p>
                            </div>
                        </div>
                        <div className="contact-info media">
                            <div className="icon">
                                <i className="ti-email"></i>
                            </div>
                            <div className="media-body">
                                <h6 className="dark-color font-alt">Our Email</h6>
                                <p>info@domainname.com<br />contact@domainname.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
