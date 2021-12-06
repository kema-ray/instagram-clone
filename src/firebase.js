import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCIZnDBk6S9XnBrdXY033pZ1bH9h-OGfxA",
  authDomain: "instagram-clone-react-ac956.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-ac956-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-react-ac956",
  storageBucket: "instagram-clone-react-ac956.appspot.com",
  messagingSenderId: "289240487058",
  appId: "1:289240487058:web:eea35209827b5c9b17424b",
  measurementId: "G-3SG3D8KXPN"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//export default db;