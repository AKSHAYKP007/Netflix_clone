import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyAj9OKuBsQ4IVOKUn702sGbPL7Syi_dHcU",
  authDomain: "instagram-clone-f3b85.firebaseapp.com",
  databaseURL: "https://instagram-clone-f3b85.firebaseio.com",
  projectId: "instagram-clone-f3b85",
  storageBucket: "instagram-clone-f3b85.appspot.com",
  messagingSenderId: "283222500019",
  appId: "1:283222500019:web:33ca1f5e58429a708486c6",
  measurementId: "G-37C7E8ZP4T"
});

const auth=firebase.auth();

export default {auth};