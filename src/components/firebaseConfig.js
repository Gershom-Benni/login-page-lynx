import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyATGuwI1T3pq-r1bplTi2Ky3HsDhJc86V4",
  authDomain: "lynx-5b2e6.firebaseapp.com",
  projectId: "lynx-5b2e6",
  storageBucket: "lynx-5b2e6.appspot.com",
  messagingSenderId: "772253156709",
  appId: "1:772253156709:web:def4c2692651348a94cd8c",
  measurementId: "G-7HGK7ZH3XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app