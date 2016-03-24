import React, {Component} from 'react';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      notes: ['note1', '2', '3'],
      bio: {name: 'Hello'},
      repos: ['repo1', '2', '3']
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}></UserProfile>
        </div>
        <div className="col-md-4">
          <Repos repos={this.state.repos}></Repos>
        </div>
        <div className="col-md-4">
          <Notes notes={this.state.notes}></Notes>
        </div>
      </div>
    )
  }
}

export default Profile;