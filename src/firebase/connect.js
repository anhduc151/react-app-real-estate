// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDnEGzEFbE6OujXWEzNcyVIJamAhEC2JEc',
  authDomain: 'fb-bds-dath.firebaseapp.com',
  databaseURL: 'https://fb-bds-dath-default-rtdb.firebaseio.com',
  projectId: 'fb-bds-dath',
  storageBucket: 'fb-bds-dath.appspot.com',
  messagingSenderId: '532545968964',
  appId: '1:532545968964:web:c66cb1a40e11f3371f1511',
  measurementId: 'G-MGG5Z8SRV4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
// const data = getDatabase(app)
export { db ,auth};
