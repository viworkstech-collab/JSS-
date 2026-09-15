import React from 'react'

const Benefits = ({ benefits }) => {
  return (
    <div className="benefits-grid">
      {benefits.map((benefit) => (
        <article
          className="benefit-card"
          key={benefit.title}
        >
          <div className="benefit-icon">
            ↗
          </div>

          <h3>{benefit.title}</h3>

          <p>{benefit.description}</p>
        </article>
      ))}
    </div>
  )
}

export default Benefits