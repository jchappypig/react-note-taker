import React, {Component} from 'react';

class NoteList extends Component {
  render() {
    let notes = this.props.notes.map((note, index) => {
      return (
        <li key={index} className="list-group-item">
          {note}
        </li>)
    });
    return (
      <ul className="list-group">
        {notes}
      </ul>
    )
  }
}

export default NoteList;