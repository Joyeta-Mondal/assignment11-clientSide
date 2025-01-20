// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdY3a1xhE5WJLkNCnfZjwELegtHVeVINo",
  authDomain: "assignment11-client-c377c.firebaseapp.com",
  projectId: "assignment11-client-c377c",
  storageBucket: "assignment11-client-c377c.firebasestorage.app",
  messagingSenderId: "704252234899",
  appId: "1:704252234899:web:a29d5f241cc3af7eef5166"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;