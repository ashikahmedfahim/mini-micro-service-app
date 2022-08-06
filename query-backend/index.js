const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/events", (req, res) => {
  console.log("Event Received: ", req.body);
  res.send({ status: "success" });
});

app.listen(5002, () => {
  console.log("Listening on 5002");
});
