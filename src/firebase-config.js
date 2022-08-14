import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBDoyCXtWmMJkawWNZt_MbUPKp2om0TkOE",
	authDomain: "tnwer-5c4c3.firebaseapp.com",
	projectId: "tnwer-5c4c3",
	storageBucket: "tnwer-5c4c3.appspot.com",
	messagingSenderId: "568383940942",
	appId: "1:568383940942:web:4d5f661f1193bc37d5161f",
	measurementId: "G-7S0Q2F72NT"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);