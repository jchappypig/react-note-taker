import React, {Component} from 'react';
import UserProfile from './Github/UserProfile';
import Repos from './Github/Repos';
import Notes from './Notes/Notes';
import Rebase from 're-base';

let base = Rebase.createClass('https://glaring-inferno-3951.firebaseio.com');
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ['note1', '2', '3'],
      bio: {name: 'Hello'},
      repos: ['repo1', '2', '3']
    };
  }

  componentDidMount() {
    this.ref = base.syncState(
      this.props.params.username,
      {
        context: this,
        asArray: true,
        state: 'notes'
      }
    )
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleAddNote(note) {
    this.setState({notes: this.state.notes.concat([note])})
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}></UserProfile>
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}></Repos>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} addNote={this.handleAddNote.bind(this)}></Notes>
        </div>
      </div>
    )
  }
}

export default Profile;