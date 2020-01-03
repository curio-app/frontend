import React from 'react';

const cardStyle = {
  width: '100px',
  height: '100px',
  border: '1px solid black'
};

const TeamMemberCard = (props) => {
  return (
    <div style={cardStyle}>
      <p>{props.name}</p>
      <img className="about-image" src={props.image} alt="team member" />
    </div>
  );
};

export default TeamMemberCard;
