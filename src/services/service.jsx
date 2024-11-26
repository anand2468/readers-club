// src/services/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const fb = "<your-api-key>"
const app = initializeApp(fb);
export const auth = getAuth(app)
export const db = getFirestore(app);