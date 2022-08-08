import'../Styles/home.css'
export function Login () {
	return (
        <div>
            
<form>
  <div className="form-field">
    <input type="email" placeholder="اسم المستخدم \البريد الالكتروني" required/>
  </div>
  
  <div className="form-field">
    <input type="password" placeholder="Password" required/>                         </div>
  
  <div className="form-field">
    <button className="btn" type="submit">Log in</button>
  </div>
</form>
        </div>
    )}