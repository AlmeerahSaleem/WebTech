const express = require("express");
const app = express();
const PORT = 3000;
const indexRoute = require("./routes/index");
const path = require("path");

// app.get("/", (req, res) => {
//   res.send("damn");
// });

//to run vash
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "vash");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
