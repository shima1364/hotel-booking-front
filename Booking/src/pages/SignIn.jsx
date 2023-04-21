import React, { useState, useContext } from "react";
import NavbarApp from "../layouts/Navbar";
import axios from "axios";
import { DataContext } from "../context/dataContext";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("password");
  const ctx = useContext(DataContext);

  const navigate = useNavigate();

  // token && navigate("/");

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios
      .post("http://localhost:8800/api/auth/login", {
        username,
        password,
      })
      .then(function (response) {
        console.log(response.data);
        ctx.setToken(response.data.token);

        const userId = response.data.userId;
        sessionStorage.setItem("userId", userId);
        console.log(userId);

        setTimeout(() => navigate("/"), 2000);
        toast.success("Your Log in  has been Successful", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch(function (error) {
        if (error.response.status === 400 || 404) {
          toast.error("Your Username or Password is incorrect", {
            position: toast.POSITION.TOP_CENTER,
          });
        }
      });
  };

  const showPasswordHandler = () => {
    setShowPassword("text");
  };
  const HidePasswordHandler = () => {
    setShowPassword("password");
  };

  return (
    <>
      <NavbarApp />
      <ToastContainer />
      <div className="container justify-content-center d-flex flex-column align-items-center">
        <h3 className="mt-5 mb-3">Sign in to your account</h3>
        <form
          className="d-flex align-items-center flex-column"
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
            className="px-2"
          />
          <label htmlFor="" className="mb-2 mt-3">
            Password
          </label>
          <div className="position-relative">
            <input
              type={showPassword}
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-2"
            />
            {showPassword === "password" ? (
              <span
                className="position-absolute"
                onClick={showPasswordHandler}
                style={{ left: "85%", top: "10%" }}
              >
                <FontAwesomeIcon icon={faEye} />
              </span>
            ) : (
              <span
                className="position-absolute"
                onClick={HidePasswordHandler}
                style={{ left: "85%", top: "10%" }}
              >
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            )}
          </div>
          <button className="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    </>
  );
}

export default SignIn;
