import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-u3k8wOqROvqF5gWj2ZbYVC175jXyzj8",

  authDomain: "sistemadechamados-9b595.firebaseapp.com",

  projectId: "sistemadechamados-9b595",

  storageBucket: "sistemadechamados-9b595.appspot.com",

  messagingSenderId: "804716079995",

  appId: "1:804716079995:web:3bd759aeb16fcd17fd6bde",

  measurementId: "G-FHEM832P3F",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
