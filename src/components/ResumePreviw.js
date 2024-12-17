// src/components/ResumePreview.js
import React from 'react';

const ResumePreview = ({ personalInfo, educationData, coursesData, skillsData, userInputData, projectsData, profilePicture }) => {
  return (
    <div className="resume-preview">
      <div className="header">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <div>
          <h1>{personalInfo?.name}</h1>
          <p>{personalInfo?.email}</p>
        </div>
      </div>

      <section className="section">
        <h2>Education</h2>
        {educationData.length > 0 ? (
          educationData.map((edu, index) => (
            <div key={index}>
              <p><strong>{edu.degree}</strong> at <em>{edu.institution}</em></p>
              <p>Field of Study: {edu.fieldOfStudy}</p>
              <p>Duration: {edu.startDate} - {edu.endDate}</p>
            </div>
          ))
        ) : (
          <p>No education data provided.</p>
        )}
      </section>

      <section className="section">
        <h2>Courses</h2>
        {coursesData.length > 0 ? (
          coursesData.map((course, index) => (
            <div key={index}>
              <p><strong>{course.name}</strong></p>
              <p>{course.description}</p>
            </div>
          ))
        ) : (
          <p>No courses provided.</p>
        )}
      </section>

      <section className="section">
        <h2>Skills</h2>
        {skillsData.length > 0 ? (
          skillsData.map((skill, index) => (
            <div key={index}>
              <p><strong>{skill.name}</strong> - {skill.level}</p>
            </div>
          ))
        ) : (
          <p>No skills provided.</p>
        )}
      </section>

      <section className="section">
        <h2>Abilities & Value You Provide</h2>
        <p><strong>Ability to Cooperate:</strong> {userInputData.abilities || "Not provided"}</p>
        <p><strong>Value You Can Provide:</strong> {userInputData.value || "Not provided"}</p>
      </section>

      <section className="section">
        <h2>Your Projects</h2>
        {projectsData.length > 0 ? (
          <ul>
            {projectsData.map((project, index) => (
              <li key={index}>
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  {project.projectName}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects added yet.</p>
        )}
      </section>
    </div>
  );
};

export default ResumePreview;
