import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import * as firebase from "firebase/app";
import 'firebase/firestore';

import 'firebase/firebase-storage';

  firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "hi-sierra.firebaseapp.com",
    databaseURL: "https://hi-sierra.firebaseio.com",
    projectId: "hi-sierra",
    storageBucket: "hi-sierra.appspot.com",
    messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSENGER_ID}`,
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
  });
  const storage = firebase.storage();
  export { storage, firebase as default }

console.log("hi")
  ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root')
  );

serviceWorker.unregister();