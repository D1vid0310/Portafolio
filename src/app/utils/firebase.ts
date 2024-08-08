// Import the functions you need from the SDKs you need
import { inject } from '@angular/core';
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDnBMcLUvDMTtZFDFBJNMBLR2gT3UlDlYI',
  authDomain: 'portafolio-web-51bae.firebaseapp.com',
  projectId: 'portafolio-web-51bae',
  storageBucket: 'portafolio-web-51bae.appspot.com',
  messagingSenderId: '2454316608',
  appId: '1:2454316608:web:90a414c0de59730ea261a5',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
