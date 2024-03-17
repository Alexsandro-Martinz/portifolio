import image from "./../assets/images/default-project.jpeg";

import "./../assets/css/Project.css";

const Project = () => {
  return (
    <div className="project" onClick={() => console.log("OK")}>
      <img src={image} alt="project image" />
      <div>
        <h3>Project Name</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores</p>
      </div>
    </div>
  );
};

export default Project;
