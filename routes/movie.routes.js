import express from "express";
import { movieCreate, movieDelete, movieIndex, movieUpdate, moviedetails } from "./controller/movie.controller.js";

const route = express.Router(); // Call Router()

// R - for reading movies
route.get("/", movieIndex);

route.get("/:id",moviedetails)

// C - for create movies
route.post("/",movieCreate);

// U - for update movies
route.put("/:id",movieUpdate);

// D - for delete movies
route.delete("/:id",movieDelete);

export default route; // Properly export the router


