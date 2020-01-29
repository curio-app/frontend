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

const people = [
  {
    id: 1,
    name: 'Allie Robinson',
    github: 'https://github.com/allie-rae',
    linkedin: 'https://www.linkedin.com/in/allie-robinson-5b8b76a1/',
    img: allie,
  },
  {
    id: 2,
    name: 'Tim Griffith',
    github: 'https://github.com/grifmang',
    linkedin: 'https://www.linkedin.com/in/tim-griffith-730a041a/',
    img: tim,
  },
  {
    id: 3,
    name: 'Michael Searles',
    github: 'https://github.com/msearles25',
    linkedin: 'https://www.linkedin.com/in/michael-searles-3b7460196/',
    img: michael,
  },
  {
    id: 4,
    name: 'Brittany Isaacson',
    github: 'https://github.com/brittanymae01',
    linkedin: 'https://www.linkedin.com/in/brittany-isaacson-1b1460196/',
    img: brittany,
  },
  {
    id: 5,
    name: 'Mashima Button',
    github: 'https://github.com/zimashima',
    linkedin: 'https://www.linkedin.com/in/mashimabutton/',
    img: mashima,
  },
  {
    id: 6,
    name: 'Kevin Smith',
    github: 'https://github.com/keveightysev',
    linkedin: 'https://linkedin.com/in/keveightysev',
    img: kevin,
  },
  {
    id: 7,
    name: 'May Ng',
    github: 'https://github.com/mngmay',
    linkedin: 'https://linkedin.com/in/mngmay',
    img: may,
  },
  {
    id: 8,
    name: 'David Hennig',
    github: 'https://github.com/davidhennig',
    linkedin: 'https://www.linkedin.com/in/david-hennig-83473350/',
    img: david,
  },
];

const About = () => {
  return (
    <section className="overall-about-container">
      <h2 className="baloo">Meet the team!</h2>
      <section className="about-card-container">
        {people.map(person => {
          return (
            <TeamMemberCard
              key={person.id}
              name={person.name}
              github={person.github}
              linkedIn={person.linkedin}
              image={person.img}
            />
          );
        })}
      </section>
    </section>
  );
};

export default About;
