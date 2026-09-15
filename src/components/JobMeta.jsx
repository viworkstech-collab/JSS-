import React from 'react'
import {
  BriefcaseBusiness,
  MapPin
} from 'lucide-react'

const JobMeta = ({ job }) => {
  return (
    <section className="job-meta-card">
      <div className="meta-row">
        <MapPin size={18} />
        <span>{job.location}</span>
      </div>

      <div className="meta-row">
        <BriefcaseBusiness size={18} />
        <span>
          {job.employmentType} · {job.department}
        </span>
      </div>

      <div className="meta-row salary">
        <span>▣</span>
        <strong>{job.salary}</strong>
        <span>/ yr</span>
      </div>
    </section>
  )
}

export default JobMeta