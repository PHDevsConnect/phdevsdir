import React from 'react';
import axios from 'axios';


class Developers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devList: []
    }
  }

  componentWillMount() {
    axios.get('/api/v1/developers').then(
      (result) => {
        this.setState({
          devList: result.data.data.users
        })

        let newDevList = [];
        console.log(this.state.devList, '==>>>');
        this.state.devList.map((dev) => {
          axios.get(`https://api.github.com/users/${dev.github_url.split('/')[3]}`)
          .then((result) => {
            const user = result.data;
            dev.image = user.avatar_url;
            newDevList.push(dev);
            this.setState({ devList: newDevList });
          });
        });
      }
    )
    
  }

  render() {
    const listItems = this.state.devList.map((d) => 
    <div key={d._id} className="developer">
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
        {d.first_name + " " + d.last_name}
      </span>
      <span>
        {
          d.stack.map((e, i) =>
            <span key={i} className="tech">{e}</span>
          )
        }
      </span>
      <span><a target="_blank" href={d.github_url}>View on Github</a></span>
      </div>
    </div>
  );
  return (
    <div className="developers">
      {listItems}
    </div>
  );
  }
 }

export default Developers;
