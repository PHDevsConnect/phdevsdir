import React from 'react'
import { developers } from '../utils/developers'
import './styles/main.css';

export default class Developers {

  render() {
    const devs = developers.map( (developer) =>
      <div className="developer">
        <div className="profile-pic">
          <img src={developer.img} alt="avatar"/>
        </div>
        <div className="profile-data">
          <span className="developer-name">
            {developer.name}
            <span title="Verified Skills" className="v-badge">Verified</span></span>
          <span>
          <span className="tech">Go Lang</span>
          <span className="tech">PHP</span>
          <span className="tech">React</span>
          </span>
          <span><a target="_blank" href={developer.url}>View on Github</a></span>
        </div>
      </div>
    )
    return (
      <div className="developers">
        { devs }
      </div>
    )
  }
}
