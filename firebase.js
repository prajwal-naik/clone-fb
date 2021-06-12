import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCw5qUE_N1I2-LUBxVH1OOpoUWo-ZwppbA",
    authDomain: "prajwal-fb-clone.firebaseapp.com",
    projectId: "prajwal-fb-clone",
    storageBucket: "prajwal-fb-clone.appspot.com",
    messagingSenderId: "279542863302",
    appId: "1:279542863302:web:c1fa79ecb3574f8bee4ec7"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export{ db, storage };