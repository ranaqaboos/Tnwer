import React from 'react'
export function Login () {
 	return (
   

    <div className="login">

     <form action="/action_page.php" method="post">
  <div className="imgcontainer">
    <img src="/user.png" alt="Avatar" className="avatar-login" />
  </div>

  <div className="container-login">
    <label htmlFor="uname"><b>اسم المستخدم</b></label>
    <input type="text" placeholder="ادخل اسم المستخدم" name="uname" required/>

    <label htmlFor="psw"><b>كلمة المرور</b></label>
    <input type="password" placeholder="ادخل كلمة المرور " name="psw" required/>
       <div className = "flask-container">
    <label>
      <input type="checkbox"  name="remember" /> ذكرني
    </label>
    <div className='row-btn'>
      
    <button type="submit">تسجيل دخول </button>
  {/* <div className="container" > */}
    <button type="button" className="cancelbtn">إلغاء</button>
    {/* <span className="psw">Forgot <a href="#">password?</a></span> */}
  {/* </div> */}
    </div>
  </div>
        </div> 

     

    </form> 
    </div>


  )}
