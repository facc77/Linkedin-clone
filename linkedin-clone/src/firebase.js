import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDPenOr3Dlo126w5EH27bk3nNwbhnRKzfM",
  authDomain: "linkedin-clone-bff27.firebaseapp.com",
  projectId: "linkedin-clone-bff27",
  storageBucket: "linkedin-clone-bff27.appspot.com",
  messagingSenderId: "786920298838",
  appId: "1:786920298838:web:dcbd2ff672bea8ea275ef7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
