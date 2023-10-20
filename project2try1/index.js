const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");
const indexRoute = require("./routes/index");

// to activate vash
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");

//to run json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
