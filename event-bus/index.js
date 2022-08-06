const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/event-bus", (req, res) => {
  const event = req.body;
  axios.post("http://localhost:5000/events", event);
  axios.post("http://localhost:5001/events", event);
  axios.post("http://localhost:3000/events", event);
  res.status(200).send({ status: "success" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
