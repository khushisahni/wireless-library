import  firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDgdCQpIiSKUOzIfCttdEclEm6cq7n1tb4",
    authDomain: "wily-library-app-27c13.firebaseapp.com",
    projectId: "wily-library-app-27c13",
    storageBucket: "wily-library-app-27c13.appspot.com",
    messagingSenderId: "924016618747",
    appId: "1:924016618747:web:d398f986ae65cdeb9b545e"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export default firebase.firestore();