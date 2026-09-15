import React from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  Share2
} from 'lucide-react'

const JobHeader = ({ job }) => {
  return (
    <>
      <div className="back-row">
        <button className="back-button">
          <ArrowLeft size={16} />
          Back to Jobs
        </button>

        <div className="request-actions">
          <span className="request-id">{job.id}</span>

          <button className="icon-button">
            <Share2 size={18} />
          </button>
        </div>
      </div>

      <div className="verification-row">
        <span className="verified">
          <CheckCircle2 size={14} />
          Verified Source
        </span>

        <span className="verified-time">
          Last verified: Today, 10:30 AM
        </span>
      </div>

      <div className="sync-text">
        Direct company career portal sync
      </div>

      <section className="hero">
        <h1>{job.title}</h1>
        <p className="company-name">
          {job.company}
        </p>
      </section>
    </>
  )
}

export default JobHeader