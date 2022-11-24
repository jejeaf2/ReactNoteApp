import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import NoteInput from "../components/NoteInput";
import { addNote } from "../utils/local-data";

function AddPage() {
  const navigate = useNavigate();

  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }
  return (
    <div>
      <NoteInput addNote={onAddNoteHandler} />
    </div>
  );
}

AddPage.propTypes = {
  note : PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}
export default AddPage;
