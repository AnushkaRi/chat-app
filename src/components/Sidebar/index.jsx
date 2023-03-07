import styles from "./styles.module.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const members = useSelector((state) => state.members.members);

  return (
    <div className={styles.sidebar}>
      {members.map((member) => (
        <div key={member.id} className={styles.member}>
          <div className={styles.avatar} style={{ backgroundColor: member.clientData.color }} />
          <div className={styles.username}>{member.clientData.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
