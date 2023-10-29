import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import bookRoute from "./node-backend/routes/bookRoutes.js";
import cors from "cors";

// Configure env (its in our root folder thats why we dont need to define path)
dotenv.config();

// Database Config
connectDB();

// Rest object
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", bookRoute);

// PORT
const PORT = process.env.PORT || 8080;

// App listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
