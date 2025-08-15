import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

connectDB();

//middleware
app.use(express.json());
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);

app.listen(port, () => {
    console.log("Server started at port: ", port);
});