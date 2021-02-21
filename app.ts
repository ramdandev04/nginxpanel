// importing express
import express from "express";

// importing router
import route from "./router/index";

// defining app
const app = express();

// handling all request to router
app.use("*", route);

// exporting app
export default app;
