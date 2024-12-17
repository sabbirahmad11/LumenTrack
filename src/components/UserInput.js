import React, { useState } from 'react';

const UserInput = ({ onSubmit }) => {
  const [abilities, setAbilities] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ abilities, value }); // Pass data to the parent component
  };

  return (
    <section className="user-input">
      <h2>Tell Us About Your Abilities & Value</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="abilities">Ability to Cooperate:</label>
          <textarea
            id="abilities"
            value={abilities}
            onChange={(e) => setAbilities(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="value">Value You Can Provide:</label>
          <textarea
            id="value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default UserInput;
