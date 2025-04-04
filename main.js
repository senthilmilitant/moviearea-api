import express, { urlencoded } from "express";
import movieroutes from "./routes/movie.routes.js"; // Use the correct import
import connectDB from "./LIB/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extented:true}))


 // Middleware to parse JSON

connectDB()




app.get("/", (req, res) => {
  res.json({ message: "hello students" });
});

// Use the router
app.use("/movies", movieroutes);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});



