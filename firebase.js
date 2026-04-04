// Import from CDN (works in normal HTML projects)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDkd2dDJQHQWuAh4RhvdBmvEpXlEU-a3S4",
  authDomain: "maacatty-fit.firebaseapp.com",
  projectId: "maacatty-fit",
  storageBucket: "maacatty-fit.firebasestorage.app",
  messagingSenderId: "138774570840",
  appId: "1:138774570840:web:44cb124ba3ff42f31f272d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const storage = getStorage(app);

// Export so we can use later
export { db, storage };