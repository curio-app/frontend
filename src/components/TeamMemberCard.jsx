import React from 'react';
import '../About.css';


const TeamMemberCard = (props) => {
  return (
    <div id="about-card">
      <div className="about-card-text">
        <h3>{props.name}</h3>
        <div id="about-links-wrapper">
          <a href={props.github}><i class="fab fa-github" id="about-icon"></i></a>
          <a href={props.linkedIn}><i class="fab fa-linkedin" id="about-icon"></i></a>
        </div>
      </div>
      <img className="about-image" src={props.image} alt="team member" />
    </div>
  );
};

export default TeamMemberCard;
