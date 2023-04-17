import { useContext } from "react";
import styles from "../sass/btn.module.scss";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../context/dataContext";

const LoginButtons = (props) => {
  const ctx = useContext(DataContext);

  const navigate = useNavigate();

  const redirectHandler = (check) => {
    if (check === "register") {
      navigate("/register");
    } else if (check === "signin") {
      navigate("/signin");
    } else if (check === "Logout") {
      ctx.setToken("");
    }
  };
  return (
    <>
      <button
        onClick={() => redirectHandler(props.refrence)}
        className={styles.btn}
      >
        {props.children}
      </button>
    </>
  );
};

export default LoginButtons;
