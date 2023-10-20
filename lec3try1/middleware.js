//middleware

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const logger = (req, res, next) => {
  req.msg = "<br> this msg is from logger";
  next();
};

const auth = (req, res, next) => {
  if (req.query.username === "almeerah") {
    next();
  } else {
    res.send("access denied");
  }
};

app.use(logger);

app.get("/", (req, res) => {
  res.send(`home page ${req.msg}`);
});

app.get("/login", auth, (req, res) => {
  res.send(`welcome almeerah ${req.msg}`);
});

app.listen(PORT, () =>
  console.log(`sever is listening on http://localhost:${PORT}`)
);
