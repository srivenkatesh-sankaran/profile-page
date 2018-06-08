import React from 'react';
import StickyNotes from './StickyNotes';
import firebase from '../firebase';

class StickyNotesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.keyNumber = 0;

    this.references = {
      comment: null,
      emailValidateMessage: null,
      stickMe: null,
      submitMessage: null,
      visitorEmail: null,
      visitorName: null,
    };

    this.state = {
      notes: [],
    };

    this.addStickyNote = this.addStickyNote.bind(this);
    this.checkRequiredFields = this.checkRequiredFields.bind(this);
    this.handleOnBlurChange = this.handleOnBlurChange.bind(this);
  }

  componentDidMount() {
    const notesRef = firebase.database().ref('notes');
    notesRef.on('value', (snapshot) => {
      const notes = snapshot.val();
      const oldNotes = [];

      Object.keys(notes).forEach((key) => {
        oldNotes.push({
          noteKey: notes[key].noteKey,
          visitorName: notes[key].visitorName,
          visitorEmail: notes[key].visitorEmail,
          comment: notes[key].comment,
        });
      });

      this.keyNumber = oldNotes.length;
      this.setState({
        notes: oldNotes,
      });
    });
    this.references.stickMe.disabled = true;
  }

  addStickyNote() {
    const newNotes = this.state.notes;
    let note = {
      noteKey: `StickyNote${this.keyNumber += 1}`,
      visitorName: this.references.visitorName.value,
      visitorEmail: this.references.visitorEmail.value,
      comment: this.references.comment.value,
    };

    newNotes.forEach((existingNote) => {
      if (newNotes[existingNote].visitorEmail.toLowerCase() === note.visitorEmail.toLowerCase()) {
        note = null;
        this.keyNumber -= 1;
      }
    });

    if (note === null) {
      newNotes.push(note);
      this.setState({ notes: newNotes });
    }
    this.storeStickyNote(note);
  }

  checkRequiredFields() {
    let nameValidation = false;
    let emailValidation = false;
    let commentValidation = false;

    if (this.references.visitorName.value.length > 0) {
      nameValidation = true;
    }

    if (this.references.visitorEmail.value.length > 0) {
      const regPattern = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if (regPattern.test(String(this.references.visitorEmail.value).toLowerCase())) {
        this.references.emailValidateMessage.innerHTML = '';
        this.references.emailValidateMessage.classList.add('no-display');
        emailValidation = true;
      } else {
        this.references.emailValidateMessage.innerHTML = 'Email not in correct format';
        this.references.emailValidateMessage.classList.remove('no-display');
      }
    } else {
      this.references.emailValidateMessage.innerHTML = '';
      this.references.emailValidateMessage.classList.add('no-display');
    }
    if (this.references.comment.value.length > 0) {
      commentValidation = true;
    }

    return nameValidation && emailValidation && commentValidation;
  }

  handleOnBlurChange() {
    if (this.checkRequiredFields()) {
      this.references.stickMe.disabled = false;
    } else {
      this.references.stickMe.disabled = true;
    }
  }

  storeStickyNote(note) {
    this.references.visitorName.value = '';
    this.references.visitorEmail.value = '';
    this.references.comment.value = '';
    this.references.stickMe.disabled = true;
    if (!note) {
      this.references.submitMessage.innerHTML = "You've already left a Note!";
    } else {
      const notesRef = firebase.database().ref('notes');
      notesRef.push(note);
      this.references.submitMessage.innerHTML = 'Successfully Added';
    }
  }

  render() {
    return (
      <div className="contact">
        <div className="contact-form">
          <div className="input-form">
            <h2> Leave a Note! </h2>
            <div>
              <label>Name</label>
              <input type="text" name="visitorName" ref={(ref) => { this.references.visitorName = ref; }} onBlur={this.handleOnBlurChange} onChange={this.handleOnBlurChange} required />
            </div>
            <div>
              <label>E-mail</label>
              <input type="text" name="visitorEmail" ref={(ref) => { this.references.visitorEmail = ref; }} onBlur={this.handleOnBlurChange} onChange={this.handleOnBlurChange} required />
              <span className="invalid-message no-display" ref={(ref) => { this.references.emailValidateMessage = ref; }} />
            </div>
            <div>
              <label>Comment</label>
              <textarea maxLength="140" name="comment" ref={(ref) => { this.references.comment = ref; }}onBlur={this.handleOnBlur} onChange={this.handleOnBlurChange} required />
            </div>
            <div>
              <button
                ref={(ref) => { this.references.stickMe = ref; }}
                onClick={this.addStickyNote}
              >
                Stick Me!
              </button>
              <span className="submit-message" ref={(ref) => { this.references.submitMessage = ref; }} />
            </div>
          </div>
          <div className="contact-options">
            <h2> Contact at: </h2>
            <div>
              <img alt="linkedin" src="assets/contact/linkedin.png" width="30" height="30" align="middle" />
              <a href="https://www.linkedin.com/in/sri-venkatesh-sankaran/"> LinkedIn Profile </a>
            </div>
            <div>
              <img alt="email" src="assets/contact/email.png" width="30" height="30" align="middle" />
              <a href="mailto:ssvenkatesh6666@gmail.com"> ssvenkatesh6666@gmail.com </a>
            </div>
            <div>
              <img alt="phone" src="assets/contact/phone.png" width="30" height="30" align="middle" />
              <span> 602-500-8128 </span>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-container">
            {
              this.state.notes.map(note => (
                <StickyNotes
                  comment={note.comment}
                  key={note.noteKey}
                  noteKey={note.noteKey}
                  visitorName={note.visitorName}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default StickyNotesContainer;
