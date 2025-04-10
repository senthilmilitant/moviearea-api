import express from "express";
import route from "./routes/movie.routes.js"; // Use the correct import
import connectDB from "./LIB/db.js";

const app = express();
const PORT = 3000;

 // Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}))


connectDB()

app.get("/", (req, res) => {
  res.json({ message: "hello students" });
});

// Use the router
app.use("/movies", route);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});












