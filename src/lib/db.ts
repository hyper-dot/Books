import { connect } from "mongoose";

// Mongodb connection utility
export const connectdb = async () => {
  try {
    await connect(process.env.MONGO_URI);
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't connect to mongodb");
  }
};
