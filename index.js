const express = require("express");
const app = express();

PORT = 3001;

app.get("/", (req, res) => {
  res.send("Welcome to Home page");
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error during application start");
  } else {
    console.log(`Application Running on port ${PORT}`);
  }
});
