import React from "react";

export function Register(){
    return(
        <div className="register">

        <form action="/action_page.php">
           <div className="container-register">
               <h1>إنشاء حساب </h1>
               <p>يرجئ ملء هذا النموذج لإنشاء حساب</p>
                   <hr/>

                 <label htmlFor="email"><b>اسم المستخدم</b></label>
                  <input type="text" placeholder="ادخل اسم المستخدم" name="username" id="username" required/>

                   <label htmlFor="psw"><b>كلمة المرور</b></label>
                   <input type="password" placeholder="ادخل كلمة المرور" name="psw" id="psw" required/>

                   <label htmlFor="psw-repeat"><b>إعادة كلمة المرور</b></label>
                 <input type="password" placeholder="إعادة كلمة المرور" name="psw-repeat" id="psw-repeat" required/>
                 <hr/>
                 <p>من خلال إنشاء حساب فإنك توافق على  <a href="#">الشروط & والخصوصية</a>.</p>
                 <button type="submit" className="registerbtn">تسجيل</button>
        
         </div>
  
                     <div className="container-signin">
                         <p>هل لديك حساب؟ <a href="/login">تسجيل دخول </a>.</p>
                    </div>
         </form>

       
        </div>
    )
}