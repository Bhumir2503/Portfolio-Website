import React from 'react';
import '../styles/projectCard.css';

function ProjectCard(props) {
  const { title = '', description = '', skills = [], link = '' } = props;

  return (
    <div className='ProCard'>
        <a target='blank' href={link}>
          <h2>{title}<img src='north-east-arrow.svg'/></h2>
        </a>
        <p>{description}</p>
        <p className='bold'>Skills and Tools Used:</p>
        <ul>
            {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
  );
}

export default ProjectCard;