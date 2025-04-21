import React from 'react';

// SkillBox component receives 'logo' and 'name' as props
const SkillBox = ({ logo, name }) => {
  return (
    
    // Skill box container that holds the logo and name of the skill
    <div className="skill-box">

      {/* Displaying the skill logo as an image */}
      <img src={logo} alt={name} className="skill-icon" />

      {/* Displaying the name of the skill */}
      <p>{name}</p>
    </div>
  );
};

export default SkillBox;
