import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyAY1ULbqFuXBY6pOMwIMDURxLAND-bnV9c",
  authDomain: "spotify-sprint2.firebaseapp.com",
  projectId: "spotify-sprint2",
  storageBucket: "spotify-sprint2.appspot.com",
  messagingSenderId: "914048749549",
  appId: "1:914048749549:web:045e9149e303745d93a1e4",
  measurementId: "G-48B7GHGRGD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const imageDB = getStorage(app)