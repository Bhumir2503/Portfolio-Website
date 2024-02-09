import "../styles/project.css";
import ProjectCard from "../components/projectCard";
import {useRef} from 'react';

function Project({setprojectLocation}) {

    const projectRef = useRef(null);

    window.addEventListener('scroll', () => {
      if (projectRef.current) {
        const rect = projectRef.current.getBoundingClientRect();
        const top = rect.top;
        setprojectLocation(top);
      }
    });



  return (
    <div className="Project" id = "Project" ref = {projectRef}>
      <div className="left">
        <h1>Projects</h1>
      </div>
      <div className="right">
        <ProjectCard 
          className="projectCard"
          title="Maze Generator and Solver"
          description="Innovative application designed to provide users with an immersive and challenging experience. Leveraging Prim's 
          Algorithm, the application generates a variety of maze structures, ensuring each exploration is unique. Additionally, advanced 
          maze-solving capabilities are integrated, featuring algorithms such as Dijkstra's, Depth First Search, and Breadth First Search, 
          enabling users to navigate through the mazes efficiently. Whether for entertainment or problem-solving, the maze project offers 
          a captivating journey through intricate and dynamic environments."
          skills={["Python", "C++", "Pygame", "SDL", "Algorithm" ]}
          link = "https://github.com/Bhumir2503/Maze-Gen-Solver"
        />
        <ProjectCard
          className="projectCard"
          title="Sudoku Solver"
          description="Pygame application meticulously developed to tackle the challenge of generating and solving Sudoku puzzles. With a keen 
          focus on user engagement, the application boasts a user-friendly interface designed to captivate players and immerse them in the 
          intricacies of Sudoku puzzle-solving. Leveraging sophisticated algorithms, the solver generates unique puzzles and offers efficient 
          solutions, showcasing its robust problem-solving capabilities. This project underscores a commitment to excellence in game development 
          and algorithmic proficiency, providing users with a dynamic and intellectually stimulating experience."
          skills={["Python", "Advance Mathematics", "Algorithm", "Pygame"]}
          link = "https://github.com/Bhumir2503/Sudoku"
        />
        <ProjectCard
          className="projectCard"
          title="Inventory Management System"
          description="The inventory management system represents a culmination of meticulous design and implementation, aimed at streamlining the process 
          of handling inventory data efficiently. Through the utilization of a robust MongoDB database, the system provides a reliable foundation for 
          storing and managing inventory data with optimal performance and scalability. Building upon this foundation, a secure and scalable backend 
          API was developed using Express.js and Node.js, ensuring seamless communication and interaction with the database. This integrated solution 
          empowers businesses to effectively track, organize, and manage their inventory, facilitating smooth operations and informed decision-making. 
          With a user-friendly interface and robust functionalities, the inventory management system serves as a cornerstone for enhancing productivity 
          and efficiency in inventory management workflows."
          skills={["React", "Node.js", "JavaScript", "HTML/CSS", "MongoDB", "Express.js", "User Authentication"]}
          link = "https://github.com/Bhumir2503/Inventory-Manager"
        />
        <ProjectCard
          className="projectCard"
          title="Real Time Chat Application"
          description="Developed real-time chat application using React, Node.js, Express.js, and MongoDB. Integrated automatic translation 
          feature for cross-cultural communication. Designed and established RESTful API endpoints for message handling. Implemented secure 
          user authentication for access control and message attribution."
          skills={["React", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "Express.js", "RESTful API", "User Authentication"]}
          link = "https://github.com/Bhumir2503/WorldChat"
        />
      </div>
    </div>
  );
}

export default Project;
