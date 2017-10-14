import React from 'react'

const Header = () => {
  return(
    <div className="header">
      <div className="logo">PHDEVSDIR</div>
        <div className="search">
          <input placeholder="Search by skill or name" type="text" id="search">
        </div>
      </div>
    </div>
  )
}

export default Header
