import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

import Row from './Row';
import { getImageSource } from '../helpers';

export default function HomeBanner(props) {
    const { name, avatar, background } = props;
    return (
        <section id="home" className="home-banner-02" style={{backgroundImage: `url(${getImageSource(background)})`}}>
            <div className="container">
                <Row className={classname('full-screen', 'align-items-center', 'p-100px-tb')}>
                    <div className="col-12 text-center">
                        <div className="img">
                            <img src={getImageSource(avatar)} title="" alt="" />
                            
                        </div>
                        <div className="ht-text">
                            <h1>{name}</h1>
                            <h2><span id="type-it"></span></h2>
                            <div className="btn-bar go-to">
                                <a className="m-btn m-btn-white" href="#work">My Work</a>
                                <a className="m-btn m-btn-t-white" href="#resume">My Experience</a>
                            </div>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="go-to go-to-next">
                <a href="#about">
                    <span></span>
                </a>
            </div>
        </section>
    );
}

HomeBanner.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
};
