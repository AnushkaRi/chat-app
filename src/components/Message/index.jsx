import styles from "./styles.module.css";

const Message = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.text} style={{ backgroundColor: props.color }}>
        {props.text}
      </div>
    </div>
  );
};

export default Message;
