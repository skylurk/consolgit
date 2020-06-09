  import firebase from 'firebase/app';
  import 'firebase/firestore';
  import 'firebase/auth';
//   import 'firebase/analytics';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBEiNQ_EujvWdA0_buS7zgh_rjp3LJSenQ",
    authDomain: "kasas-1-0.firebaseapp.com",
    databaseURL: "https://kasas-1-0.firebaseio.com",
    projectId: "kasas-1-0",
    storageBucket: "kasas-1-0.appspot.com",
    messagingSenderId: "738491199443",
    appId: "1:738491199443:web:af1b35be37d7e0c290c926",
    measurementId: "G-0ZSDKP017Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore()

  export default firebase;