import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHyIp1iNBkU-zfYgLmLSEGhMQym21S45M",
  authDomain: "react-chat-app-2bc7f.firebaseapp.com",
  databaseURL: "https://react-chat-app-2bc7f-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-2bc7f",
  storageBucket: "react-chat-app-2bc7f.appspot.com",
  messagingSenderId: "227634753639",
  appId: "1:227634753639:web:b13414bf295b93791f24c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
