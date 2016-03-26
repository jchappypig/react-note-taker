import React, {Component} from 'react';

class NoteList extends Component {
  render() {
    const {notes} = this.props;
    return (
      <ul className="list-group">
        {
          notes.map((note, index) => (
            <li key={index} className="list-group-item">{note}</li>
          ))
        }
      </ul>
    )
  }
}

export default NoteList;