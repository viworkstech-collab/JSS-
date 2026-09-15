import React from 'react'

const Qualifications = ({
  minimumQualifications,
  preferredExperience
}) => {
  return (
    <section className="qualifications-card">
      <h3>⌁ Minimum Qualifications</h3>

      <ul>
        {minimumQualifications.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>

      <div className="divider"></div>

      <h3>☆ Preferred Experience</h3>

      <ul>
        {preferredExperience.map((item) => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Qualifications