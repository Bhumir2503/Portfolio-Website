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
    <div className="Project" ref = {projectRef}>
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
          title="Inventory Tracker"
          description="The inventory management system represents a culmination of meticulous design and implementation, aimed at streamlining the process 
          of handling inventory data efficiently. Through the utilization of a robust MongoDB database, the system provides a reliable foundation for 
          storing and managing inventory data with optimal performance and scalability. Building upon this foundation, a secure and scalable backend 
          API was developed using Express.js and Node.js, ensuring seamless communication and interaction with the database. This integrated solution 
          empowers businesses to effectively track, organize, and manage their inventory, facilitating smooth operations and informed decision-making. 
          With a user-friendly interface and robust functionalities, the inventory management system serves as a cornerstone for enhancing productivity 
          and efficiency in inventory management workflows."
          skills={["React", "Node.js", "JavaScript", "HTML/CSS", "MongoDB", "Express.js", "User Authentication"]}
          link = "https://github.com/Bhumir2503/Inventory-Tracker"
        />
        <ProjectCard
          className="projectCard"
          title="Budget Tracker"
          description="Our budget planner is a versatile tool designed to help users manage their finances seamlessly across different platforms. Built 
          with ReactJS for web and React Native for mobile, it offers a unified experience whether accessed from a desktop browser or a smartphone. With 
          intuitive interfaces tailored to each platform, users can easily track expenses, set budgets, and visualize their financial goals. By harnessing 
          the power of ReactJS and React Native, our budget planner ensures a consistent and efficient user experience, empowering individuals to take control 
          of their finances wherever they go."
          skills={["ReactJS", "React Native", "Node.js", "MongoDB", "JavaScript", "HTML/CSS", "Express.js", "User Authentication"]}
          link = "https://github.com/Bhumir2503/Budget-Tracker"
        />
      </div>
    </div>
  );
}

export default Project;
