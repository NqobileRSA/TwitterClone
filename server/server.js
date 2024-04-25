import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import connectedMongoDB from "./db/connectMongoDB.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRoutes);

console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  console.log(`server running on port : ${PORT}`);
  connectedMongoDB();
});
