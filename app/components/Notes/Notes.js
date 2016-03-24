import React, {Component} from 'react';
import NoteList from './NoteList';

class Notes extends Component {
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <NoteList notes={this.props.notes}></NoteList>
      </div>
    );
  }
}

export default Notes;