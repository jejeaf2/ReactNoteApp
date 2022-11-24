import React from "react";
import PropTypes from "prop-types";
import { showFormattedDate } from '../utils/index';
import DeleteButton from "./DeleteButton";

function NoteDetail({ id, title, createdAt, body, onDelete }) {
  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{title}</h2>
      <p className="detai-page__createdAt"> {showFormattedDate(createdAt)}</p>
      <p className="detail-page__body">{body}</p>
      <DeleteButton id={id} onDelete={onDelete}/>
    </div>
  );
}

NoteDetail.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
