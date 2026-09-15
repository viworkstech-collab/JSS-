import React from 'react'

const SectionHeader = ({
  number,
  label,
  title,
  extra
}) => {
  return (
    <div className="section-heading">
      <div className="section-number-row">
        <span>
          {number}
          &nbsp;//&nbsp;
          {label}
        </span>

        {extra && (
          <small>{extra}</small>
        )}
      </div>

      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeader