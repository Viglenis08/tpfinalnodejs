import dotenv from 'dotenv';
dotenv.config();
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


console.log("🔑 Variables cargadas:", process.env.FIREBASE_PROJECT_ID);

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log("🔥 Firebase DB initialized:", db);


console.log("✅ Firebase inicializado con el proyecto:", firebaseConfig.projectId);


export { db };
