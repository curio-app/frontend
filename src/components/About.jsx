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
import '../About.css';

const imageNames = [allie, tim, michael, brittany, mashima, kevin, may, david];

const imageStrings = ['Allie Robinson', 'Tim Griffith', 'Michael Searles', 'Brittany Isaacson', 'Mashima Button', 'Kevin Smith', 'May Ng', 'David Hennig'];
const githubStrings = ['https://github.com/allie-rae', 'https://github.com/grifmang', 'https://github.com/msearles25', 'https://github.com/brittanymae01', 'https://github.com/zimashima', 'https://github.com/keveightysev', 'https://github.com/mngmay', 'https://github.com/davidhennig']
const linkedInStrings = ['https://www.linkedin.com/in/allie-robinson-5b8b76a1/', 'https://www.linkedin.com/in/tim-griffith-730a041a/', 'https://www.linkedin.com/in/michael-searles-3b7460196/', 'https://www.linkedin.com/in/brittany-isaacson-1b1460196/', 'https://www.linkedin.com/in/mashimabutton/', 'https://linkedin.com/in/keveightysev', 'https://linkedin.com/in/mngmay', 'https://www.linkedin.com/in/david-hennig-83473350/']

const About = () => {
  return (
    <div className="overall-about-container">
      <h2 className="baloo">Meet the team!</h2>
      <div className="about-card-container">
        {imageNames.map((element, index) => {
          return <TeamMemberCard
            key={index}
            name={imageStrings[index]}
            github={githubStrings[index]}
            linkedIn={linkedInStrings[index]}
            image={element} />;
        })}
      </div>
    </div>
  );
};

export default About;
