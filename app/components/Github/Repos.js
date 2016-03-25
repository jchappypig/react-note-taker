import React, {Component} from 'react';

class Repos extends Component {
  render() {
    console.log('Repos: ', this.props.repos);
    return (
      <div>
        <p>Repos</p>
      </div>
    );
  }
}

Repos.propTypes = {
  username: React.PropTypes.string.isRequired,
  repos: React.PropTypes.array.isRequired
};

export default Repos;