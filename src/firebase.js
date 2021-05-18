import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZdUdzvpeJ0ZEhY4CK4foaaJ0iUD57ubU",
    authDomain: "floods-f905e.firebaseapp.com",
    projectId: "floods-f905e",
    storageBucket: "floods-f905e.appspot.com",
    messagingSenderId: "184786996044",
    appId: "1:184786996044:web:d2918a749af4605bfa5de9",
    measurementId: "G-HCWKGJM9JC"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };