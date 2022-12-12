// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdw5uK3Zg9gIirURQHWJ0HKzxNH0K4mb4",
  authDomain: "myportfolio-e1a7f.firebaseapp.com",
  projectId: "myportfolio-e1a7f",
  storageBucket: "myportfolio-e1a7f.appspot.com",
  messagingSenderId: "762513147789",
  appId: "1:762513147789:web:a3e1e89bd90e84a8c4dfc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;