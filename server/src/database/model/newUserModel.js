import mongoose from "mongoose";

const newUserSchema = new mongoose.Schema({
  branch: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  yearOfBirth: {
    type: Number,
    required: true,
  },
  fatherPhone: {
    type: String,
    required: true,
  },
  motherPhone: {
    type: String,
    required: true,
  },
});

export const newUserModel = mongoose.model("New User", newUserSchema);
