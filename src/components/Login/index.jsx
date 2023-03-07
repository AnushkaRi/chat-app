import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { userActions } from "../../redux/user-slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const changeName = (event) => {
    setName(event.target.value);
  };

  const login = (e) => {
    e.preventDefault();

    if (!name) {
      setErrorMsg("Please enter your name!!");
    } else {
      dispatch(userActions.setUser({ name }));
      navigate("/Chat");
    }
  };

  return (
    <div className={styles.page}>
      <h1 className={styles.header}>
        Welcome to <span className={styles.neontext}>neon</span> Chat!
      </h1>

      <form className={styles.container}>
        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          type="text"
          placeholder="Your username is..."
          value={name}
          onChange={changeName}
        />
        <button className={styles.btn} onClick={login}>
          Login
        </button>
      </form>
      {errorMsg && <div className={styles.error}> {errorMsg} </div>}
    </div>
  );
};

export default Login;
