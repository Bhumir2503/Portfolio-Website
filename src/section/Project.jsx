import "../styles/project.css";
import { useRef } from "react";

function Project({setprojectLocation}) {

  const projectRef = useRef(null);

  window.addEventListener('scroll', () => {
    if (projectRef.current) {
      const rect = projectRef.current.getBoundingClientRect();
      const bottom = rect.bottom;
      setprojectLocation(bottom);
    }
  });

  return (
    <div className="Project" ref = {projectRef}>
      <h1>Project</h1>
    </div>
  );
}

export default Project;
