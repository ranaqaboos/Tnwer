import React from "react";
import { Navbar } from "../componets/Navbar";
import { Register } from "../componets/Register";
import'../Styles/register.css'
export function Registerpage() {
	return (
        <>
        <Navbar/>
    <div className="homepage"> 
    <Register/>
    </div>
        </>
    )}