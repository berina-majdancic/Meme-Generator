import { useState } from 'react'
import './App.css'
import Generator from './Generator'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzDz8CUGr5JXaVFujso6Y13apJ0e1oVAI",
  authDomain: "meme-generator-717e8.firebaseapp.com",
  projectId: "meme-generator-717e8",
  storageBucket: "meme-generator-717e8.appspot.com",
  messagingSenderId: "957550323549",
  appId: "1:957550323549:web:6adbc888d0e7eead8deab4",
  measurementId: "G-2102WT0LJK"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {

  return (
    <>
 
    <Generator />
    
        
    </>
  )
}

export default App
