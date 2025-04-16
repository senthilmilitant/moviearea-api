import express from "express";
import route from "./routes/movie.routes.js"; // Use the correct import
import connectDB from "./LIB/db.js";

const app = express();
const PORT = 3000;

 // Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}))


connectDB()
//default route
app.get("/", (req, res) => {
  res.send(`<h1>Hello from node js!</h1>`);
});

// Use the router
app.use("/movies", route);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});












