import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    return (
      <div>
        <p>User Profile</p>
        <p> Username: {this.props.username} </p>
        <p> Bio: {this.props.bio.name}</p>
      </div>
    );
  }
}

export default UserProfile;