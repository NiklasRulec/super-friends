import axios from "axios";
import "./HomePage.css";
import { useEffect, useState } from "react";
import FriendsForm from "../../components/FriendForm/FriendForm";

const HomePage = () => {
  const [friends, setFriends] = useState([]);
  const [refresh, setRefresh] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/friends");
      setFriends(data);
    };
    fetchData();
  }, [refresh]);

  const handleDelete = async (friendId) => {
    try {
      const { data } = await axios.delete(`/api/deleteFriend/${friendId}`);
      console.log(data);
      setRefresh((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className="home-section">
        <FriendsForm setRefresh={setRefresh} />
        <h1>Your Friends:</h1>
        <article className="friend-card-gallery">
          {friends.map((friend, index) => (
            <article className="friend-card" key={index}>
              <h3>{friend.name}</h3>
              <h3>{friend.bday}</h3>
              <h3>{friend.adress}</h3>
              <h3>{friend.phone}</h3>
              <h3>{friend.mail}</h3>
              <button onClick={() => handleDelete(friend._id)}>Delete</button>
            </article>
          ))}
        </article>
      </section>
    </>
  );
};
export default HomePage;
