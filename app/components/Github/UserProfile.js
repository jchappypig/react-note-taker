import React, {Component} from 'react';

class UserProfile extends Component {
  render() {
    console.log('Bio: ', this.props.bio);
    return (
      <div>
        <p>User Profile</p>
        <p> Username: {this.props.username} </p>
      </div>
    );
  }
}

UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
};

export default UserProfile;