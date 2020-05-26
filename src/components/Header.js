import React from 'react';
import PropTypes from 'prop-types';

import { getImageSource } from '../helpers';

export default function Header(props) {
    const { name, avatar } = props;

    const links = [
        { title: 'Home', url: '#home' },
        { title: 'About Me', url: '#about' },
        { title: 'Resume', url: '#resume' },
        { title: 'Portfolio', url: '#work' },
    ];

    return (
        <header className="header-left header-left-light hl-desk scroll-bar" id="navbar-collapse-toggle">
            <div className="hl-top">
                <div className="img">
                    <img src={getImageSource(avatar)} title="" alt="" />
                </div>
                <h6>{name}</h6>
            </div>
            <ul className="nav">
                {
                    links.map(link => (
                        <li key={link.url}>
                            <a className="nav-link active" href={link.url}>
                                <span>{link.title}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};
