// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBl_4LhBWrINWMZpUBMw3H67gRR3RwRmlQ",
	authDomain: "instaclone-4cb53.firebaseapp.com",
	projectId: "instaclone-4cb53",
	storageBucket: "instaclone-4cb53.appspot.com",
	messagingSenderId: "135025582825",
	appId: "1:135025582825:web:5138c4090936c84d7f4678",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage;

export { app, db, storage };
