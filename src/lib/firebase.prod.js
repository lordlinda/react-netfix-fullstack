import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDyRnpgApd1U4QNiORAUfEe32ehX-JZ2d0",
  authDomain: "react-netflix-fullstack.firebaseapp.com",
  databaseURL: "https://react-netflix-fullstack.firebaseio.com",
  projectId: "react-netflix-fullstack",
  storageBucket: "react-netflix-fullstack.appspot.com",
  messagingSenderId: "678283056282",
  appId: "1:678283056282:web:da8e06f61d45b68213fb23",
  measurementId: "G-FCSDCH6YHD",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
