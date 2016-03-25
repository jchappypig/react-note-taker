import React, {Component} from 'react';
import NoteList from './NoteList';
import AddNote from './AddNote';

class Notes extends Component {
  render() {
    return (
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote={this.props.addNote}></AddNote>
        <NoteList notes={this.props.notes}></NoteList>
      </div>
    );
  }
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired
};

export default Notes;