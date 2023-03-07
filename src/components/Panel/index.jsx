import React from "react";
import Message from "../Message";
import styles from "./styles.module.css";

import { useRef, useEffect } from "react";
const Panel = (props) => {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [props.messages]);

  return (
    <div className={styles.panel}>
      {props.messages.map((message, idx) => (
        <Message key={idx} name={message.name} color={message.color} text={message.text} />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Panel;
