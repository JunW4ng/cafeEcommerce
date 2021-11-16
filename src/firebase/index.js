import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB4OSk9mcd8dYEFRnjlftItvhZVKwxHjsE",
    authDomain: "cafe-ecommerce.firebaseapp.com",
    projectId: "cafe-ecommerce",
    storageBucket: "cafe-ecommerce.appspot.com",
    messagingSenderId: "365693398966",
    appId: "1:365693398966:web:2e26d70217579b0498db17"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };
