import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure your custom CSS is imported
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import CoursesForm from './components/CoursesForm';
import SkillsForm from './components/SkillsForm';

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);

  const handlePersonalInfoSubmit = (data) => {
    setPersonalInfo(data);
  };

  const handleEducationSubmit = (data) => {
    setEducationData(data);
  };

  const handleCoursesSubmit = (data) => {
    setCoursesData(data);
  };

  const handleSkillsSubmit = (data) => {
    setSkillsData(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>LumenTrack - Create Your Resume</h1>
      </header>

      <main>
        {!personalInfo ? (
          <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />
        ) : !educationData.length ? (
          <EducationForm onSubmit={handleEducationSubmit} />
        ) : !coursesData.length ? (
          <CoursesForm onSubmit={handleCoursesSubmit} />
        ) : !skillsData.length ? (
          <SkillsForm onSubmit={handleSkillsSubmit} />
        ) : (
          <div>
            <h2>Resume Summary</h2>
            <h3>Personal Info</h3>
            <p>Name: {personalInfo.name}</p>
            <p>Email: {personalInfo.email}</p>
            <h3>Education</h3>
            {educationData.map((edu, index) => (
              <div key={index}>
                <p><strong>{edu.degree}</strong> at <em>{edu.institution}</em></p>
                <p>Field of Study: {edu.fieldOfStudy}</p>
                <p>Duration: {edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
            <h3>Courses</h3>
            {coursesData.map((course, index) => (
              <div key={index}>
                <p><strong>{course.name}</strong></p>
                <p>{course.description}</p>
              </div>
            ))}
            <h3>Skills</h3>
            {skillsData.map((skill, index) => (
              <div key={index}>
                <p><strong>{skill.name}</strong> - {skill.level}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
