import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVIj1qx6BWAdtnLgZSbmNv0Dlp9Xx9AtU",
  authDomain: "floods-web.firebaseapp.com",
  projectId: "floods-web",
  storageBucket: "floods-web.appspot.com",
  messagingSenderId: "978059909266",
  appId: "1:978059909266:web:f6aa0a48656e5fd18c6e4b"
};
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider, db };