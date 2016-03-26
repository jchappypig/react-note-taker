import React from 'react';
import NoteList from './NoteList';
import AddNote from './AddNote';

const Notes = ({username, notes, addNote}) => {
  return (
    <div>
      <h3>Notes for {username}</h3>
      <AddNote username={username} addNote={addNote}></AddNote>
      <NoteList notes={notes}></NoteList>
    </div>
  );
};

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired
};

export default Notes;