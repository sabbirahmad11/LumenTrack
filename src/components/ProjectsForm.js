import React, { useState } from 'react';

const ProjectsForm = ({ onSubmit }) => {
  const [projectName, setProjectName] = useState('');
  const [projectLink, setProjectLink] = useState('');
  const [projects, setProjects] = useState([]); // To manage multiple projects

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (projectName && projectLink) {
      const newProject = { projectName, projectLink };
      setProjects([...projects, newProject]); // Add new project to the list
      onSubmit(newProject); // Optional: You can call the parent's onSubmit if needed
      setProjectName('');
      setProjectLink('');
    }
  };

  return (
    <div>
      <h2>Showcase Your Projects</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Project Name</label>
          <input
            type="text"
            className="form-control"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Project Link</label>
          <input
            type="url"
            className="form-control"
            value={projectLink}
            onChange={(e) => setProjectLink(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Project</button>
      </form>

      <h3>Your Projects</h3>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              {project.projectName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsForm;
