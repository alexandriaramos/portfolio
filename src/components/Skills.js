import React from 'react';
import classname from 'classname';
import PropTypes from 'prop-types';

import Skill from './Skill';
import Row from './Row';

export default function Skills(props) {
    const { skills, location, role } = props;

    const pre = ['a', 'e', 'i', 'o', 'u'].includes(role[0].toLowerCase()) ? 'An' : 'A';

    return (
        <section className="section">
            <div className="container">
                <Row className={classname('sm-m-25px-b', 'm-35px-b')}>
                    <div className="col-md-12 text-center">
                        <div className="section-title">
                            <h3 className="dark-color text-uppercase">WHAT CAN I DO</h3>
                            <p className="text-uppercase small">{pre} {role} based in {location}</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    {
                        skills.map((s, key) => (
                            <Skill key={key} id={key} name={s} />
                        ))
                    }
                </Row>
            </div>
        </section>
    );
}

Skills.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
};
