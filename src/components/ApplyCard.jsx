import React from 'react'
import { ArrowRight } from 'lucide-react'

const ApplyCard = () => {
  const handleApply = () => {
    alert('Application flow started!')
  }

  return (
    <section className="final-cta">
      <h2>
        Ready to lead platform engineering?
      </h2>

      <p>
        Average response time:
        48 business hours
      </p>

      <button onClick={handleApply}>
        Submit Application
        <ArrowRight size={18} />
      </button>
    </section>
  )
}

export default ApplyCard
