import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on('disconnected', () => {
  console.log("mmongodb disconnected");
});
mongoose.connection.on('connected', () => {
  console.log("mmongodb connected");
});


app.listen(8800, () => {
  connect();
  console.log("Connected to express server at port 8800");
})