const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;
  try {
    await axios.post("http://localhost:5000/events", event);
  } catch (err) {
    console.log(err);
  }
  try {
    await axios.post("http://localhost:5001/events", event);
  } catch (err) {
    console.log(err);
  }
  try {
    await axios.post("http://localhost:5002/events", event);
  } catch (err) {
    console.log(err);
  }
  res.status(200).send({ status: "success" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});
