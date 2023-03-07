import { useState } from "react";

import styles from "./styles.module.css";

const Input = (props) => {
  const [text, setText] = useState("");

  const changeText = (event) => {
    setText(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.drone.publish({
      room: "observable-room",
      message: text,
    });
    setText("");
  };

  return (
    <form className={styles.container} onSubmit={submitHandler}>
      <input className={styles.input} type="text" placeholder="Enter the message" value={text} onChange={changeText}>
        {props.text}
      </input>
      <button className={styles.btn}>Send</button>
    </form>
  );
};

export default Input;
