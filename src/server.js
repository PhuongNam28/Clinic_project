const express = require("express");
const bodyParser = require("body-parser");
const viewEngine = require("./config/viewEngine");
const initWebRoutes = require("./route/web");
require('dotenv').config();

let app = express();

// Config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8080;

app.listen(port, (err) => {
  if (err) {
    console.error("Error starting server:", err)
  } else {
    console.log("Backend NodeJS is running on the port: " + port);
  }
});
