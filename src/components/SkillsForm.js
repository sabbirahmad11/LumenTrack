import React, { useState } from 'react';

function SkillsForm({ onSubmit }) {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [proficiency, setProficiency] = useState('');

  const handleAddSkill = () => {
    // Ensure that the fields are not empty before adding
    if (skillName && proficiency) {
      const newSkill = {
        name: skillName,
        level: proficiency
      };
      setSkills([...skills, newSkill]);

      // Clear the fields after adding
      setSkillName('');
      setProficiency('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSubmit = () => {
    onSubmit(skills);
  };

  return (
    <div>
      <h2>Enter Skills</h2>

      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Skill Name"
        />
      </div>

      <div className="form-group">
        <select
          className="form-control"
          value={proficiency}
          onChange={(e) => setProficiency(e.target.value)}
        >
          <option value="">Select Proficiency</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <button className="btn btn-primary" onClick={handleAddSkill}>Add Skill</button>
      <button className="btn btn-secondary" onClick={handleSubmit}>Next</button>

      <h3>Added Skills</h3>
      {/* Render skills list */}
      <div>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p><strong>{skill.name}</strong> - {skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsForm;
