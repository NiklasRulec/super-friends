import { useRef } from "react";
import axios from "axios";
import "./FriendForm.css";
import "../Button/Button.css";

const FriendForm = ({ setRefresh }) => {
  const nameRef = useRef();
  const bdayRef = useRef();
  const adressRef = useRef();
  const phoneRef = useRef();
  const mailRef = useRef();

  const handleSubmit = async () => {
    const newFriend = {
      name: nameRef.current.value,
      bday: bdayRef.current.value,
      adress: adressRef.current.value,
      phone: phoneRef.current.value,
      mail: mailRef.current.value,
    };
    const response = await axios.post("/api/newFriend", newFriend);
    console.log(response);
    setRefresh((prev) => !prev);
  };
  return (
    <article className="friend-form">
      <input type="text" placeholder="Name" ref={nameRef}></input>
      <input type="text" placeholder="Date of Birth" ref={bdayRef}></input>
      <input type="text" placeholder="Adress" ref={adressRef}></input>
      <input type="text" placeholder="Phone" ref={phoneRef}></input>
      <input type="text" placeholder="E-Mail" ref={mailRef}></input>
      <button onClick={handleSubmit} className="button">
        Add
      </button>
    </article>
  );
};

export default FriendForm;
