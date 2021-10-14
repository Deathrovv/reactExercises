import React from "react";
import "./App.css";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyCzvwd-Orbtjide7UdkNaySLbpkiw_LR08",
  authDomain: "chat-with-the-world-1b7cd.firebaseapp.com",
  projectId: "chat-with-the-world-1b7cd",
  storageBucket: "chat-with-the-world-1b7cd.appspot.com",
  messagingSenderId: "416651900723",
  appId: "1:416651900723:web:63400b3a7b6f13e6373046",
  measurementId: "G-6QQP2FRH74",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header className="App-header"></header>
      <section className="App-main">{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
}

function ChatRoom() {}

export default App;
