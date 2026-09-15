import React from 'react'
import { ArrowLeft, UserRound } from 'lucide-react'

const Header = () => {
  return (
    <header className="top-header">
      <button className="header-back">
        <ArrowLeft size={22} />
      </button>

      <div className="brand">
        <span className="brand-mark">▰</span>
        <span>Job Details</span>
      </div>

      <button className="profile-button">
        <UserRound size={18} />
      </button>
    </header>
  )
}

export default Header