import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ name, github, linkedIn, image }) => {
  return (
    <section className="about-card">
      <section className="about-card-text">
        <h3>{name}</h3>
        <nav className="about-links-wrapper">
          <a href={github}>
            <p style={{ display: 'none' }}>GitHub</p>
            <i className="fab fa-github about-icon" />
          </a>
          <a href={linkedIn}>
            <p style={{ display: 'none' }}>LinkedIn</p>
            <i className="fab fa-linkedin about-icon" />
          </a>
        </nav>
      </section>
      <img className="about-image" src={image} alt="team member" />
    </section>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamMemberCard;
