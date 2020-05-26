import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
    const { name } = props;

    return (
        <div className="mob-header mh-desk">
            <div className="d-flex">
                <div className="navbar-brand">
                    <a className="logo-text" href="index.html">
                        {name}
                    </a>
                </div>
                <button className="toggler-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
}

Header.propTypes = {
    name: PropTypes.string.isRequired,
};