import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classname';

export default function Row(props) {
    const { children, className = '' } = props;
    return (
        <div
            className={
                classname('row', ...className.split(' '))
            }
        >
            {children}
        </div>
    );
}

Row.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};
