import React from 'react'
import { Building2 } from 'lucide-react'

const CompanyCard = ({ job }) => {
  return (
    <section className="company-card">
      <h3>
        <Building2 size={20} />
        {job.company} Inc.
      </h3>

      <p>
        Building the standard for modern
        software engineering workflows.
        Headquartered in San Francisco with
        distributed hubs in London, New York,
        and Zurich.
      </p>

      <div className="company-meta">
        Series B · 140 Employees
        &nbsp;
        San Francisco, CA
      </div>
    </section>
  )
}

export default CompanyCard