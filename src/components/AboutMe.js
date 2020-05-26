import React from 'react';
import PropTypes from 'prop-types';

import Row from './Row';
import { getImageSource } from '../helpers';

export default function AboutMe(props) {
    const {
        name,
        location,
        email,
        phone,
        bio,
        role,
        resume,
        displayPhoto,
    } = props;

    const about = [
        { title: 'name', data: name },
        { title: 'role', data: role },
        { title: 'location', data: location },
        { title: 'email', data: email },
        { title: 'phone', data: phone },
    ];

    return (
        <section id="about" className="overflow-hidden section dark-section">
            <div className="container">
                <Row>
                    <div className="col-lg-5 m-15px-tb">
                        <div className="about-me-img">
                            <img src={getImageSource(displayPhoto)} title="" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 m-15px-tb">
                        <div className="about-me-01">
                            <div className="section-title">
                                <h3 className="dark-color text-uppercase">ABOUT ME</h3>
                            </div>
                            <p>{bio}</p>
                            <ul className="list">
                                {
                                    about.map(a => (
                                        <li key={a.title} className="media">
                                            <h6><span>{a.title}</span></h6>
                                            <p>{a.data}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className="btn-bar">
                                <a className="m-btn m-btn-theme" href={resume}>Download Resume</a>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
        </section>
    );
}

AboutMe.propTypes = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    displayPhoto: PropTypes.string.isRequired,
};
