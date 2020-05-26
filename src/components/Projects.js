import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

import Row from './Row';
import { getImageSource } from '../helpers';

export default function Projects(props) {
    const { projects, role, location } = props;

    const pre = ['a', 'e', 'i', 'o', 'u'].includes(role[0].toLowerCase()) ? 'An' : 'A';

    return (
        <section id="work" className="section dark-section">
            <div className="container">
                <Row className={classname('sm-m-25px-b', 'm-35px-b')}>
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">My Portfolio</h3>
                            <p className="text-uppercase small">{pre} {role} based in {location}</p>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="container">
                <div className="portfolio-content lightbox-gallery">
                    {
                        projects.map((p, key) => (
                            <div key={key} className="grid-item product branding">
                                <div className="portfolio-box-01">
                                    <div className="portfolio-img">
                                        <img src={getImageSource(p.image)} title="" alt="" />
                                    </div>
                                    <div className="portfolio-info">
                                        <h5>{p.title}</h5>
                                        <span>{p.type}</span>
                                        <a className="link-overlay" href={p.url}>&nbsp;</a>
                                        <a className="gallery-link" href={p.url}><i className="ti-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

Projects.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired,
    role: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};
