import firebase from "firebase";
import 'firebase/database'
import 'firebase/auth'

let firebaseConfig = {
    apiKey: "AIzaSyAlgqbzQAGDTDon4sBZJkJs9Du4oaDXJsQ",
    authDomain: "meuapp-1d955.firebaseapp.com",
    databaseURL: "https://meuapp-1d955-default-rtdb.firebaseio.com",
    projectId: "meuapp-1d955",
    storageBucket: "meuapp-1d955.appspot.com",
    messagingSenderId: "548064398307",
    appId: "1:548064398307:web:1b435acf1cc435a5eeaed6",
    measurementId: "G-4XSYK1FG2W"
  };
  
  // Initialize Firebase
if (!firebase.apps.length){
    // Abrir conexão
    firebase.initializeApp(firebaseConfig)
}

  export default firebase;