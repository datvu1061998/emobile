import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import appReducers from "./reducers/index";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import thunk from 'redux-thunk';  

var firebaseConfig = {
  apiKey: "AIzaSyCkFhFuJNCi8hWzSpa5ba5pyY1OBtgqykQ",
  authDomain: "emobile-9eb75.firebaseapp.com",
  databaseURL: "https://emobile-9eb75.firebaseio.com",
  projectId: "emobile-9eb75",
  storageBucket: "emobile-9eb75.appspot.com",
  messagingSenderId: "140366350813",
  appId: "1:140366350813:web:bdabab835081dafc210e34",
  measurementId: "G-YNYCGKRT7N"
};
firebase.initializeApp(firebaseConfig);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
