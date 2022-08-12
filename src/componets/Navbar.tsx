import React from 'react'
import'../Styles/navbar.css'
export function Navbar () {
 	return (
    <div className="bg-img">
    <div className="container-nav">
      <div className="topnav">
        <a href="/">الصفحة الرئسية</a>
        <a href="/">الحجز</a>
        <a href="/course" > المقررات</a>
        <a href="/teacher">الأساتذة</a>
        <a href="#contact">اتصل بنا</a>
        <a href="#about">من نحن</a>
        <input type="text" placeholder="Search.." className='search'/>
      
      </div>
      <div className="topnav">
      <a href="/login" className='letf'>تسجيل الدخول</a>
      <a href="/register"className='letf'>تسجيل</a>
      </div>
    </div>
  </div>
      );
    }
    