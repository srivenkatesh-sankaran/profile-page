import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/StickyNotes.css';

const propTypes = {
  noteKey: PropTypes.string.isRequired,
  visitorName: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

const StickyNotes = (props) => {
  const { comment, noteKey, visitorName } = props;
  return (
    <div className="sticky-notes" id={noteKey}>
      <p className="sticky-header"> {visitorName} </p>
      <p> {comment} </p>
    </div>
  );
};

StickyNotes.propTypes = propTypes;
export default StickyNotes;
