import firebase from 'firebase';
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDm7kai_aw874moKQk-l4mOoA8RxhIWjOU',
  authDomain: 'sticky-notes-component.firebaseapp.com',
  databaseURL: 'https://sticky-notes-component.firebaseio.com',
  projectId: 'sticky-notes-component',
  storageBucket: 'sticky-notes-component.appspot.com',
  messagingSenderId: '100491713720',
};
firebase.initializeApp(config);
export default firebase;
