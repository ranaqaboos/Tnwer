import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loginpage } from './Pages/Login';
import { Homepage } from './Pages/home';
import'./Styles/index.css'
import { Registerpage } from './Pages/register';
// import './index.css';
// import { Explorepage } from './pages/explore';
// import { Homepage } from './pages/home';
// import { Loginpage } from './pages/login';
// import { Profilepage } from './pages/profile';
// import { Registerpage } from './pages/register';

const firebaseConfig = {
	apiKey: "AIzaSyBDoyCXtWmMJkawWNZt_MbUPKp2om0TkOE",
	authDomain: "tnwer-5c4c3.firebaseapp.com",
	projectId: "tnwer-5c4c3",
	storageBucket: "tnwer-5c4c3.appspot.com",
	messagingSenderId: "568383940942",
	appId: "1:568383940942:web:4d5f661f1193bc37d5161f",
	measurementId: "G-7S0Q2F72NT"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
		<Route path='/' element={<Homepage />} />
		{/* <Route path='/login' element={<Loginpage />} /> */}
		<Route path='/login' element={<Loginpage />} />
		<Route path='/register' element={<Registerpage />} />
		{/* <Route path='/profile' element={<Profilepage />} /> */}
       {/* <Route path='/explore' element={<Explorepage />} /> */}
	   </Routes>
	</BrowserRouter>
);

