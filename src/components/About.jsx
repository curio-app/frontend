import React from 'react';
import allie from '../images/allie.png';
import tim from '../images/tim.png';
import brittany from '../images/brittany.png';
import mashima from '../images/mashima.png';
import kevin from '../images/kevin.png';
import david from '../images/david.png';
import may from '../images/may.png';
import michael from '../images/michael.png';
import TeamMemberCard from './TeamMemberCard';

const imageNames = [allie, tim, michael, brittany, mashima, kevin, may, david];

const imageStrings = ['allie', 'tim', 'michael', 'brittany', 'mashima', 'kevin', 'may', 'david'];

const About = () => {
  return (
    <div className="about-container">
      <h2>Meet the team!</h2>
      <div className="about-icons">
        {imageNames.map((element, index) => {
          return <TeamMemberCard key={index} name={imageStrings[index]} image={element} />;
        })}
      </div>
    </div>
  );
};

export default About;
