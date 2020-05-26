import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

import Row from './Row';

export default function Experience(props) {
    const { location, role, jobs } = props;

    const pre = ['a', 'e', 'i', 'o', 'u'].includes(role[0].toLowerCase()) ? 'An' : 'A';

    return (
        <section id="resume" className="section dark-section">
            <div className="container">
                <Row className={classname('sm-m-25px-b', 'm-35px-b')}>
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Experience</h3>
                            <p className="text-uppercase small">{pre} {role} based in {location}</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    {
                        jobs.map((e, key) => (
                            <div key={key} className="col-md-6 m-15px-tb">
                                <div className="feature-box-2">
                                    <div className="icon">
                                        {
                                            e.type === 'job'
                                                ? <i className="fas fa-briefcase"></i>
                                                : <i className="fas fa-graduation-cap"></i>
                                        }
                                    </div>
                                    <h6>{e.from} - {e.to || 'Present'}</h6>
                                    <h5>{e.role} - {e.company}</h5>
                                    <p>{e.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </Row>
            </div>
        </section>
    );
}

Experience.propTypes = {
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    jobs: PropTypes.arrayOf(PropTypes.shape({
        from: PropTypes.number.isRequired,
        to: PropTypes.number.isRequired,
        role: PropTypes.string.isRequired,
        company: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
    })).isRequired,
};
