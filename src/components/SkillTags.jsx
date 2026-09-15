import React from 'react'

const SkillTags = ({ skills }) => {
  return (
    <div className="tags">
      {skills.map((skill) => (
        <span
          className="tag"
          key={skill}
        >
          {skill}
        </span>
      ))}
    </div>
  )
}

export default SkillTags