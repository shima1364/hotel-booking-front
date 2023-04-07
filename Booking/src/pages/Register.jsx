import NavbarApp from "./../layouts/Navbar";
import { useContext } from "react";
import { DataContext } from "./../context/dataContext";
import { useRef } from "react";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';

function Register(props) {
    const navigate = useNavigate()
  const ctx = useContext(DataContext);
  const inputEmail = useRef();
  const inputPassword = useRef();
  const inputPasswordConfirm = useRef();
  const RegisterHandler = (e) => {
    e.preventDefault();
    ctx.setEmailRegister(inputEmail.current.value);
    if(inputPassword.current.value === inputPasswordConfirm.current.value){
        toast.success("Your Registration has been Successful", {
            position: toast.POSITION.TOP_CENTER
          });
        ctx.setPasswordRegister(inputPassword.current.value)
        setTimeout(()=>{navigate('/signin')},5000)
    }
    else toast.error("Password and Confirm Password does not match", {
        position: toast.POSITION.TOP_LEFT
      });
  };
  return (
    <>
      <NavbarApp />
      <div className="container">
      <ToastContainer />
        <h3 className="mt-5 mb-3">Create an account</h3>
        <form
          className="d-flex flex-column align-items-start"
          onSubmit={RegisterHandler}
        >
          <label className="mb-2">Email address</label>
          <input type="email" name="" id="" ref={inputEmail} />
          <label htmlFor="" className="mt-3 mb-2">
            Password
          </label>
          <input type="password" name="" id="" ref={inputPassword} />
          <label htmlFor="" className="mb-2 mt-3">
            Confirm Passowrd
          </label>
          <input type="password" name="" id="" ref={inputPasswordConfirm} />
          <button className="btn btn-info mt-3">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Register;
