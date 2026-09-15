import React from 'react'

import Header from '../components/Header'
import JobHeader from '../components/JobHeader'
import JobMeta from '../components/JobMeta'
import SkillTags from '../components/SkillTags'
import JobActions from '../components/JobActions'
import VerificationCard from '../components/VerificationCard'
import SectionHeader from '../components/SectionHeader'
import Responsibilities from '../components/Responsibilities'
import Qualifications from '../components/Qualifications'
import Benefits from '../components/Benefits'
import CompanyCard from '../components/CompanyCard'
import ApplyCard from '../components/ApplyCard'

import { jobData } from '../data/jobData'
import '../styles/job-details.css'
const JobDetails = () => {
  return (
    <div className="page">
      <div className="job-container">

        <Header />

        <main className="content">

          <JobHeader job={jobData} />

          <JobMeta job={jobData} />

          <SkillTags skills={jobData.skills} />

          <JobActions />

          <VerificationCard />

          <SectionHeader
            number="01"
            label="CONTEXT"
            title="About the Role"
            extra="4 min read"
          />

          <section className="text-card">
            {jobData.description.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </section>

          <SectionHeader
            number="02"
            label="CORE DIRECTIVES"
            title="Key Responsibilities"
          />

          <Responsibilities
            responsibilities={jobData.responsibilities}
          />

          <SectionHeader
            number="03"
            label="COMPETENCIES"
            title="Requirements & Qualifications"
          />

          <Qualifications
            minimumQualifications={
              jobData.minimumQualifications
            }
            preferredExperience={
              jobData.preferredExperience
            }
          />

          <SectionHeader
            number="04"
            label="COMPENSATION & WELL-BEING"
            title="Benefits & Perks"
          />

          <Benefits
            benefits={jobData.benefits}
          />

          <CompanyCard job={jobData} />

          <ApplyCard />

        </main>

      </div>
    </div>
  )
}

export default JobDetails