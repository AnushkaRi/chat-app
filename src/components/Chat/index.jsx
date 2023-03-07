import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./styles.module.css";

import Panel from "../Panel";
import Input from "../Input";
import Sidebar from "../Sidebar";
import { membersActions } from "../../redux/member-slice";

const Chat = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const members = useSelector((state) => state.members);
  const [messages, setMessages] = useState([]);
  const [drone, setDrone] = useState();

  const CHANNEL_ID = "SUtEVBU8x2IknhsT";

  let colors = ["#880E4F", "#4A148C", "#1A237E", "#01579B", "#006064"];
  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * 5)];
  };

  if (!drone) {
    const droneInitializer = new Scaledrone(CHANNEL_ID, {
      data: {
        name: user.name,
        color: getRandomColor(),
      },
    });
    setDrone(droneInitializer);
  }

  useEffect(() => {
    drone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }

      const room = drone.subscribe("observable-room");

      room.on("open", (error) => {
        if (error) {
          console.error(error);
        } else {
          console.log("Connected to room");
        }
      });

      room.on("members", (members) => {
        dispatch(membersActions.welcomeMembers({ members }));
      });

      room.on("member_join", (member) => {
        dispatch(membersActions.welcomeMember({ member }));
      });

      room.on("member_leave", (deserter) => {
        dispatch(membersActions.discardMember({ member: deserter }));
      });

      room.on("data", (text, member) => {
        console.log(member);
        const { color, name } = member.clientData;

        setMessages((previousMessages) => [
          ...previousMessages,
          {
            text,
            color,
            name,
          },
        ]);
      });
    });

    return () => {
      drone.on("close", (event) => {
        console.log("Connection was closed", event);
      });

      drone.on("error", (error) => {
        console.error(error);
      });
    };
  }, []);

  return (
    <div className={styles.chat}>
      <Panel messages={messages} />
      <Sidebar members={members} />
      <Input drone={drone} />
    </div>
  );
};

export default Chat;
