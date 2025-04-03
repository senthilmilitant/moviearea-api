import express from "express";
import movieroutes from "./routes/movie.routes.js"; // Use the correct import
import connectDB from "./LIB/db.js";

const app = express();
const PORT = 3000;

connectDB()


app.use(express.json()); // Middleware to parse JSON

app.get("/", (req, res) => {
  res.json({ message: "hello students" });
});

// Use the router
app.use("/movies", movieroutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



