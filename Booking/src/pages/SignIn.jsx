import React from "react";
import NavbarApp from "../layouts/Navbar";
import axios from "axios";
import { useContext, useState } from "react";
import UserContext  from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignIn () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // const { token, setToken } = useContext(UserContext);
  // token && navigate("/");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:8800/api/auth/login", {
      username,
      password,
    });
    console.log(response.data);
    setToken(response.data.token);
    navigate("/");
  };

  return (
    <>
      <NavbarApp />
      <div className="container">
        <h3 className="mt-5 mb-3">Sign in to your account</h3>
        <form
          className="d-flex align-items-start flex-column"
          onSubmit={handleLogin}
        >
          <label htmlFor="" className="mb-2">
            User Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="" className="mb-2 mt-3">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-info mt-3">Login</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;

