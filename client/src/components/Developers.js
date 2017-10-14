import React from 'react'

const Developers = () => {
  return (
    <div className="developers">
    <div className="developer">
      <div className="profile-pic">
        <img src="https://avatars3.githubusercontent.com/u/9336187?v=4&s=460" />
      </div>
      <div className="profile-data">
        <span className="developer-name">
          Francis Sunday
          <span title="Verified Skills" className="v-badge">Verified</span></span>
        <span>
          <span className="tech">Go Lang</span>
          <span className="tech">PHP</span>
          <span className="tech">React</span>
        </span>
        <span><a target="_blank" href="https://github.com/codehakase">View on Github</a></span>
      </div>
    </div>
    <div className="developer">
      <div className="profile-pic">
        <img src="https://avatars2.githubusercontent.com/u/24508232?v=4&s=460" />
      </div>
      <div className="profile-data">
        <span className="developer-name">
          Joseph Uchenna
          <span title="Verified Skills" className="v-badge">Verified</span></span>
        <span>
          <span className="tech">JavaScript</span>
          <span className="tech">PHP</span>
          <span className="tech">MySQL</span>
        </span>
        <span><a target="_blank" href="https://github.com/afrikhero">View on Github</a></span>
      </div>
    </div>
    <div className="developer">
      <div className="profile-pic">
        <img src="https://avatars1.githubusercontent.com/u/25697914?v=4&s=460" />
      </div>
      <div className="profile-data">
        <span className="developer-name">
          Ndifreke Friday
          <span title="Verified Skills" className="v-badge">Verified</span></span>
        <span>
          <span className="tech">JavaScript</span>
        </span>
        <span><a target="_blank" href="https://github.com/NddyAndy">View on Github</a></span>
      </div>
    </div>
    <div className="developer">
      <div className="profile-pic">
        <img src="https://avatars3.githubusercontent.com/u/15184445?v=4&s=460" />
      </div>
      <div className="profile-data">
        <span className="developer-name">
          Michael Ozoemena
        </span>
        <span>
          <span className="tech">React</span>
          <span className="tech">PHP</span>
          <span className="tech">Python</span>
        </span>
        <span><a target="_blank" href="https://github.com/THEozmic">View on Github</a></span>
      </div>
    </div>
  </div>
  )
}

export default Developers
