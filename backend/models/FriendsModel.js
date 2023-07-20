import mongoose from "mongoose";

const friendSchema = mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  bday: {
    type: String,
  },
  adress: {
    type: String,
    required: [true, "Adress is required"],
  },
  phone: {
    type: Number,
  },
  mail: {
    type: String,
    required: [true, "Mail is required"],
  },
});

export const Friend = mongoose.model("Friend", friendSchema);
