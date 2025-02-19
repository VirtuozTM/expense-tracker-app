// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2jqVuosUb6hfdq1ien6l5F-htrcbEfX0",
  authDomain: "expense-tracker-e64b7.firebaseapp.com",
  projectId: "expense-tracker-e64b7",
  storageBucket: "expense-tracker-e64b7.firebasestorage.app",
  messagingSenderId: "595360919649",
  appId: "1:595360919649:web:43cb46d43d99dc34033a20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
