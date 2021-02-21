// Importing http module soon will be using https
import http from "http";

// importing app
import app from "./app";

// defining port
let port = 3000;

// starting server
http
  .createServer(app)
  .listen(port)
  .on("listening", () => {
    console.log("SERVER STARTED 🚀");
  });
