import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ name, github, linkedIn, image }) => {
  return (
    <div id="about-card">
      <div className="about-card-text">
        <h3>{name}</h3>
        <div id="about-links-wrapper">
          <a href={github}>
            <i class="fab fa-github" id="about-icon"></i>
          </a>
          <a href={linkedIn}>
            <i class="fab fa-linkedin" id="about-icon"></i>
          </a>
        </div>
      </div>
      <img className="about-image" src={image} alt="team member" />
    </div>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TeamMemberCard;
