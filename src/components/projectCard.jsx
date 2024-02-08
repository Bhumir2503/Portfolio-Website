import React from 'react';
import '../styles/projectCard.css';

function ProjectCard(props) {
  const { title = '', description = '', skills = [] } = props;

  return (
    <div className='ProCard'>
        <h2>{title}</h2>
        <p>{description}</p>
        <p><bold>Skills and Tools Used:</bold></p>
        <ul>
            {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
            ))}
        </ul>
    </div>
  );
}

export default ProjectCard;