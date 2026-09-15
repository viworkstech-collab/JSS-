import React, { useState } from 'react'
import {
  ArrowRight,
  Bookmark
} from 'lucide-react'

const JobActions = () => {
  const [bookmarked, setBookmarked] = useState(false)

  const handleApply = () => {
    alert('Application flow started!')
  }

  return (
    <>
      <button
        className="primary-button"
        onClick={handleApply}
      >
        Apply Now
        <ArrowRight size={18} />
      </button>

      <button
        className="secondary-button"
        onClick={() => setBookmarked(!bookmarked)}
      >
        <Bookmark size={18} />
        {bookmarked
          ? 'Saved'
          : 'Bookmark / Save Job'}
      </button>

      <div className="application-note">
        ♢ Applications processed directly
        on Linear Careers
      </div>
    </>
  )
}

export default JobActions