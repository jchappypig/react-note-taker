import React, {Component} from 'react';

class AddNote extends Component {
  handleSubmit() {
    let note = this.refs.note;
    this.props.addNote(note.value);
    note.value = '';
  }

  render() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Add new note" ref='note' />
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.handleSubmit.bind(this)}>
            Submit
          </button>
        </span>
      </div>
    )
  }
}

AddNote.propTypes = {
  username: React.PropTypes.string.isRequired,
  addNote: React.PropTypes.func.isRequired
};

export default AddNote;