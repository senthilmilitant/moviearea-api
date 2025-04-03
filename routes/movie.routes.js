import express from "express";

const route = express.Router(); // Call Router()

// R - for reading movies
route.get("/", (req, res) => {
  res.send("Get all movie list");
});

// C - for create movies
route.post("/", (req, res) => {
  res.send("Create a movie");
});

// U - for update movies
route.put("/:id", (req, res) => {
  res.send("Update a movie");
});

// D - for delete movies
route.delete("/:id", (req, res) => {
  res.send("Delete a movie");
});

export default route; // Properly export the router
