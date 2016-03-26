import React from 'react';

const NoteList = ({notes}) => {
  return (
    <ul className="list-group">
      {
        notes.map((note, index) => (
          <li key={index} className="list-group-item">{note}</li>
        ))
      }
    </ul>
  )
};

export default NoteList;