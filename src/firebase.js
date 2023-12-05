// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0v4IeR3_uMSD33e5N7VSW3vWtUhPlZAQ",
  authDomain: "locust-ea1ea.firebaseapp.com",
  projectId: "locust-ea1ea",
  storageBucket: "locust-ea1ea.appspot.com",
  messagingSenderId: "46127265625",
  appId: "1:46127265625:web:53a86ce0f4a55ac9823e48",
  measurementId: "G-90V9WX6D7N",
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
