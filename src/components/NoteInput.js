import React from "react";
import PropsTypes from "prop-types";
// import { BsCheckCircle } from "react-icons/bs";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render() {
    return (
            <div className='note-input'>
                <form onSubmit={this.onSubmitEventHandler}>
                  <br/>
                    <h1 className='note-input__title'>Create your note</h1>
                    <br/>
                    <div className='note-input__body'>
                        <input type="text" placeholder="Title" onChange={this.onTitleChangeEventHandler} />
                        <br />
                        <textarea type="text" placeholder="tulis catatanmu..." onChange={this.onBodyChangeEventHandler} rows="10" cols="50" />
                        <br />
                        <button type="submit">Create</button>
                    </div>
                </form>
            </div>
    );
  }
}

NoteInput.propsTypes = {
  title: PropsTypes.string.isRequired,
  body: PropsTypes.string.isRequired,
};

export default NoteInput;