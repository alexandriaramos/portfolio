import React from 'react';
import PropTypes from 'prop-types';

export default function Skill(props) {
    const { id, name } = props;

    return (
        <div className="m-15px-tb col-sm-6 col-lg-3">
            <div className="feature-box-1">
                <div className="icon">{id + 1}</div>
                <h5>{name.toUpperCase()}</h5>
            </div>
        </div>
    );
}

Skill.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
};
