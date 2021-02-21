// importing express
import express from "express";

// defining route
const route = express.Router();

// handling all GET request
route.get("/*", (req, res) => {
  res.json({
    code: 200,
    text: "Server running",
  });
});

// handling all POST request
route.post("/*", (req, res) => {
  res.json({
    code: 400,
    text: "server doesn't ready for POST request",
  });
});

// exporting route
export default route;
