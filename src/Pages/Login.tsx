import React from "react";
import { Login } from "../componets/Login";
import { Navbar } from "../componets/Navbar";
import'../Styles/login.css'
import'../Styles/navbar.css'

export function Loginpage() {
	return (
    <>
    <Navbar/>
    <div className="homepage">
     
      <Login/>
    </div>
    </>
      
    )}