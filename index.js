const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT ?? 8000;
const environment = process.env.ENVIRONMENT ?? "not informed";
const message = process.env.API_WORKS_MESSAGE ?? "API is working";

console.debug(`ENVIRONMENT: ${environment}`);

app.use(bodyParser.json());

app.get(["/", "/api"], (req, res) => {
  console.debug(`${req.path} route`);
  res.json({ message });
});

app.get("/api/environment", (_req, res) => {
  console.debug("environment data route");
  res.json({ environment });
});

app.listen(port, (err) => {
  if (err) {
    console.error("Error:", err);
  }
  console.debug(`Listening on port ${port}`);
});

module.exports = app