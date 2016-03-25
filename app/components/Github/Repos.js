import React, {Component} from 'react';

class Repos extends Component {
  render() {
    return (
      <div>
        <p>Repos</p>
        <p>Repos: {this.props.repos}</p>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.propTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;