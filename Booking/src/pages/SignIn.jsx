import React from "react";
import NavbarApp from "../layouts/Navbar";

function SignIn(props) {
  return (
    <>
      <NavbarApp />
      <div className="container">
        <h3 className="mt-5 mb-3">Sign in to your account</h3>
        <form className="d-flex align-items-start flex-column">
            <label htmlFor="" className="mb-2">Email address</label>
            <input type="email" name="" id="" />
            <label htmlFor="" className="mb-2 mt-3">Password</label>
            <input type="password" name="" id="" />
            <button className="btn btn-info mt-3">Login</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
