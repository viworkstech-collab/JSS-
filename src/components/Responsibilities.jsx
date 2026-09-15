import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const Responsibilities = ({
  responsibilities
}) => {
  return (
    <div className="responsibility-list">
      {responsibilities.map((item) => (
        <div
          className="responsibility-card"
          key={item}
        >
          <CheckCircle2 size={20} />
          <p>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default Responsibilities