const express = require("express");
const bot = require("./telegram/bot");
const app = express();
require("./config/db");

app.listen(8080, () => {
  console.log("server started");
  bot.start()
});

app.get("/", (req, res) => {
  res.send("Diablo Running!");
});
