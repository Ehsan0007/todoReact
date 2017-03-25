import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import firebase from 'firebase'

// Initialize Firebase
var config = {
   apiKey: "AIzaSyClGMxD3Cevr8XawuHDg1G89MevgZMI6pI",
    authDomain: "todo-91220.firebaseapp.com",
    databaseURL: "https://todo-91220.firebaseio.com",
    storageBucket: "todo-91220.appspot.com",
    messagingSenderId: "35988506221"
};
firebase.initializeApp(config);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
