import express from "express";
import "./models/index.js";
import { Friend } from "./models/FriendsModel.js";

const PORT = 3001;
const app = express();

// ! MIDDLEWARE
app.use(express.json());

// ! ALL FRIENDS
app.get("/api/friends", async (req, res) => {
  const data = await Friend.find();
  res.json(data);
});

// ! NEW FRIEND
app.post("/api/newFriend", async (req, res) => {
  try {
    const newFriend = await Friend.create(req.body);
    res.json(newFriend);
  } catch (err) {
    console.log(err);
    res.send("there was an error");
  }
});

// ! DELETE FRIEND
app.delete("/api/deleteFriend/:friendId", async (req, res) => {
  const friendId = req.params.friendId;
  try {
    const dbRes = await Friend.findByIdAndDelete(friendId);
    res.send("Friend has been deleted");
  } catch (err) {
    console.log(err);
    res.send("there was an error");
  }
});

// ! GET FRIEND DATA BY ID
app.get("/api/getFriendData/:friendId", async (req, res) => {
  try {
    const friendId = req.params.friendId;
    const friendData = await Friend.find({ _id: friendId });
    res.json(friendData);
  } catch (err) {
    console.log(err);
    res.send("there was an error");
  }
});

// ! SERVER LISTEN
app.listen(PORT, () => console.log(`Der Server läuft auf Port : ${PORT}`));
