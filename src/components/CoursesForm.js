import React, { useState } from 'react';

function CoursesForm({ onSubmit }) {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');

  const handleAddCourse = () => {
    // Ensure that the fields are not empty before adding
    if (courseName && description) {
      const newCourse = {
        name: courseName,
        description: description
      };
      setCourses([...courses, newCourse]);

      // Clear the fields after adding
      setCourseName('');
      setDescription('');
    } else {
      alert('Please fill in all fields');
    }
  };

  const handleSubmit = () => {
    onSubmit(courses);
  };

  return (
    <div>
      <h2>Enter Courses or Training</h2>
      
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder="Course/Training Name"
        />
      </div>

      <div className="form-group">
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
      </div>
      
      <button className="btn btn-primary" onClick={handleAddCourse}>Add Course</button>
      <button className="btn btn-secondary" onClick={handleSubmit}>Next</button>

      <h3>Added Courses</h3>
      {/* Render courses list */}
      <div>
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <p><strong>{course.name}</strong></p>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CoursesForm;
