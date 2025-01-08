import React from "react";

function page() {
  return <>
      <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="/dashboard" className="nav__link nav__link--active">Dashboard</a>
          <a href="/challenges" className="nav__link ml-1">Challenges</a>
        </li>
        <li className="nav__list-item">
          <a href="login.html" className="nav__link">login</a>
        </li>
      </ul>
    </nav>
    <main className="main">
      <form className="form">
        <h4 className="title">
          welcome to <br />
          <span className="title--highlighted">challenge forum</span>
          
        </h4>

        <div className="social mt-2">
          <img src="assets/images/google-logo.png" alt="Google logo" className="icon icon--google"/>
          <span>Login with Google</span>
        </div>
        <div className="social mt-1">
            <img src="assets/images/facebook-logo.png" alt="Facebook logo" className="icon icon--facebook"/>
          <span>Login with facebook</span>
        </div>
        <div className="form__divider mt-1">
            
            <div className="form__divider-content">OR</div>
        </div>

        <div className="form__group form__group--icon-container">
            <i className="fa-solid fa-envelope"></i>
          <div className="input-container"> 
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>
        </div>
        <div className="form__group form__group--icon-container">
            
            <i className="fa-solid fa-key"></i>
          <div className="input-container"> 
            <input type="password" name="password" min="8" id="password" placeholder="password" />
            <i className="fa-solid fa-eye"></i> 
            <i className="fa-solid fa-eye-slash"></i>
          </div>
        </div>
         {/* <div className="errors">
            <p className="error">Invalid credentials</p>
        </div>   */}
        <div className="remember-me  mt-3 text--samll">
          <div>
            <input type="checkbox" name="remember" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <a href="/forgot-passowrd" className="nav__link link--active text--samll">Forgot Password?</a>
        </div>
        <button type="submit" className="btn btn--login mt-1">
            Login
        </button>
        <div className="register-link mt-1 text-center">
            Don't have an account? <a href="/register" className="nav__link link--active text--samll">Register</a>
        </div>
      </form>
    </main></>
}

export default page;
