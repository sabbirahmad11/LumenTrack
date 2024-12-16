import React, { useState } from 'react';

function EducationForm({ onSubmit }) {
  const [education, setEducation] = useState([]);
  const [degree, setDegree] = useState('');
  const [institution, setInstitution] = useState('');
  const [fieldOfStudy, setFieldOfStudy] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddEducation = () => {
    // Ensure that the fields are not empty before adding
    if (degree && institution && fieldOfStudy && startDate && endDate) {
      const newEducation = {
        degree,
        institution,
        fieldOfStudy,
        startDate,
        endDate
      };
      setEducation([...education, newEducation]);

      // Clear the fields after adding
      setDegree('');
      setInstitution('');
      setFieldOfStudy('');
      setStartDate('');
      setEndDate('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSubmit = () => {
    onSubmit(education);
  };

  return (
    <div>
      <h2>Enter Education Information</h2>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree (e.g., Master's, Bachelor's)"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={institution}
          onChange={(e) => setInstitution(e.target.value)}
          placeholder="Institution Name"
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={fieldOfStudy}
          onChange={(e) => setFieldOfStudy(e.target.value)}
          placeholder="Field of Study"
        />
      </div>

      <div className="form-group">
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Start Date</label>
      </div>

      <div className="form-group">
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <label>End Date</label>
      </div>

      <button className="btn btn-primary" onClick={handleAddEducation}>Add Education</button>
      <button className="btn btn-secondary" onClick={handleSubmit}>Next</button>

      <h3>Added Education</h3>
      {/* Render education list */}
      <div>
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <p><strong>{edu.degree}</strong> at <em>{edu.institution}</em></p>
            <p>Field of Study: {edu.fieldOfStudy}</p>
            <p>Duration: {edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EducationForm;
