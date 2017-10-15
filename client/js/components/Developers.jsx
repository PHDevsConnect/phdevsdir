import React from 'react';
import devList from './DevelopersList';


const Developers = () => {
  const listItems = devList.map((d) => 
    <div key={d.id} className="developer">
      <div className="profile-pic">
        <img src={d.image} />
      </div>
      <span class="badge-container">
        <span title="Verified" className="v-badge">
          <i className="icon-energy"></i>
        </span>
      </span>
      <div className="profile-data">
      <span className="developer-name">
        {d.name}
      </span>
      <span>
        {
          d.stack.map((e, i) =>
            <span key={i} className="tech">{e}</span>
          )
        }
      </span>
      <span><a target="_blank" href={d.giturl}>View on Github</a></span>
      </div>
    </div>
  );
  
  
  return (
    <div className="developers">
      {listItems}
    </div>
  );
 }

export default Developers;
