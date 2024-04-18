import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  name: { type: String, required: true },
  password: { type: String },
  email: { type: String, unique: true, required: true, sparse: true },
  googleId: { type: String, unique: true, sparse: true },
  picture: { type: String },
});

const User = models.User || model("User", userSchema);

export default User;
