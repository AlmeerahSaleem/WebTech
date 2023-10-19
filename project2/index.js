const express = require("express");
const app = express();
const PORT = 4000;
const indexRoute = require("./routes/index");
const path = require("path");

// to activate vash
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");

//to run json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
