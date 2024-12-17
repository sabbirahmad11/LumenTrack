import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PersonalInfoForm from './components/PersonalInfoForm';
import EducationForm from './components/EducationForm';
import CoursesForm from './components/CoursesForm';
import SkillsForm from './components/SkillsForm';
import UserInput from './components/UserInput';
import ProjectsForm from './components/ProjectsForm'; 
import jsPDF from 'jspdf';  // Import jsPDF

function App() {
  const [personalInfo, setPersonalInfo] = useState(null);
  const [educationData, setEducationData] = useState([]);
  const [coursesData, setCoursesData] = useState([]);
  const [skillsData, setSkillsData] = useState([]);
  const [userInputData, setUserInputData] = useState({ abilities: '', value: '' });
  const [projectsData, setProjectsData] = useState([]); // State to store projects

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

  const handleUserInputSubmit = (data) => {
    setUserInputData(data);
  };

  const handleProjectsSubmit = (data) => {
    setProjectsData((prevData) => [...prevData, data]); // Add new project to the list
  };

  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    const margin = 10;

    // Adding profile picture if available
    if (personalInfo?.profilePicture) {
      doc.addImage(personalInfo.profilePicture, 'JPEG', margin, margin, 30, 30);  // Adjust the image size and position
    }

    // Name and email
    doc.setFontSize(16);
    doc.text(`Name: ${personalInfo?.name || 'Not provided'}`, margin + 40, margin + 10);
    doc.text(`Email: ${personalInfo?.email || 'Not provided'}`, margin + 40, margin + 20);

    // Education Section
    doc.setFontSize(14);
    doc.text('Education:', margin, margin + 40);
    let yOffset = margin + 50;
    educationData.forEach((edu) => {
      doc.setFontSize(12);
      doc.text(`${edu.degree} - ${edu.institution}`, margin, yOffset);
      yOffset += 10;
      doc.text(`Field: ${edu.fieldOfStudy}, Duration: ${edu.startDate} - ${edu.endDate}`, margin, yOffset);
      yOffset += 15;
    });

    // Skills Section
    doc.setFontSize(14);
    doc.text('Skills:', margin, yOffset);
    yOffset += 10;
    skillsData.forEach((skill) => {
      doc.setFontSize(12);
      doc.text(`${skill.name} - ${skill.level}`, margin, yOffset);
      yOffset += 10;
    });

    // Projects Section
    doc.setFontSize(14);
    doc.text('Projects:', margin, yOffset);
    yOffset += 10;
    projectsData.forEach((project) => {
      doc.setFontSize(12);
      doc.text(`${project.projectName}: ${project.projectLink}`, margin, yOffset);
      yOffset += 10;
    });

    // Save PDF
    doc.save('resume.pdf');
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>LumenTrack - Create Your Resume</h1>
        </header>

        <nav>
          <ul>
            <li><Link to="/personal-info">Personal Info</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/courses">Courses</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/user-input">Abilities & Value</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/summary">Resume Summary</Link></li>
          </ul>
        </nav>

        <main>
          <Routes>
            {/* Personal Info Form */}
            <Route path="/personal-info" element={<PersonalInfoForm onSubmit={handlePersonalInfoSubmit} />} />
            
            {/* Education Form */}
            <Route path="/education" element={<EducationForm onSubmit={handleEducationSubmit} />} />
            
            {/* Courses Form */}
            <Route path="/courses" element={<CoursesForm onSubmit={handleCoursesSubmit} />} />
            
            {/* Skills Form */}
            <Route path="/skills" element={<SkillsForm onSubmit={handleSkillsSubmit} />} />
            
            {/* User Input Form (Abilities and Value) */}
            <Route path="/user-input" element={<UserInput onSubmit={handleUserInputSubmit} />} />
            
            {/* Projects Form */}
            <Route path="/projects" element={<ProjectsForm onSubmit={handleProjectsSubmit} />} />
            
            {/* Resume Summary and Preview */}
            <Route path="/summary" element={
              <div>
                <h2>Resume Summary</h2>

                {/* Show Profile Picture */}
                {personalInfo?.profilePicture && (
                  <div>
                    <h3>Profile Picture</h3>
                    <img src={personalInfo.profilePicture} alt="Profile" width="100" height="100" />
                  </div>
                )}
                
                <h3>Personal Info</h3>
                <p>Name: {personalInfo?.name}</p>
                <p>Email: {personalInfo?.email}</p>

                <h3>Education</h3>
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
                
                <h3>Skills</h3>
                {skillsData.length > 0 ? (
                  skillsData.map((skill, index) => (
                    <div key={index}>
                      <p><strong>{skill.name}</strong> - {skill.level}</p>
                    </div>
                  ))
                ) : (
                  <p>No skills provided.</p>
                )}

                <h3>Abilities & Value You Provide</h3>
                <p><strong>Ability to Cooperate:</strong> {userInputData.abilities || "Not provided"}</p>
                <p><strong>Value You Can Provide:</strong> {userInputData.value || "Not provided"}</p>

                {/* Show Projects */}
                <h3>Your Projects</h3>
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

                {/* Export PDF Button */}
                <button onClick={generatePDF}>Export PDF</button>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
