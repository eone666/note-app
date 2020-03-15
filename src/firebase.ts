// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq6bc5iGRCXdIDUfGACoA6kkxgEW05jdQ",
  authDomain: "note-app-6dcad.firebaseapp.com",
  databaseURL: "https://note-app-6dcad.firebaseio.com",
  projectId: "note-app-6dcad",
  storageBucket: "note-app-6dcad.appspot.com",
  messagingSenderId: "735394357604",
  appId: "1:735394357604:web:b1b79629c52dcddb6eda71"
};

const fb = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
export default fb;
