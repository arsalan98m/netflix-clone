import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCznB5yZgg2GFVw_yzuzm-ZQ0o4lJY8Yto',
  authDomain: 'signapplication-ba353.firebaseapp.com',
  databaseURL: 'https://signapplication-ba353.firebaseio.com',
  projectId: 'signapplication-ba353',
  storageBucket: 'signapplication-ba353.appspot.com',
  messagingSenderId: '230014641985',
  appId: '1:230014641985:web:f63165e1f8c47552c323c0',
  measurementId: 'G-T77VVEYQ7W',
};

initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };
