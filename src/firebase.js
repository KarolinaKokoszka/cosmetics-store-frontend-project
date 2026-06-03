import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh8k6ukAoxsCFGbv0-OBMJf5SN4Nqy6Kw",
  authDomain: "glowi-cosmetics-store.firebaseapp.com",
  projectId: "glowi-cosmetics-store",
  storageBucket: "glowi-cosmetics-store.firebasestorage.app",
  messagingSenderId: "164615566288",
  appId: "1:164615566288:web:cc879c094895cd15b37fd5",
  measurementId: "G-YFP72FJ9KG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;