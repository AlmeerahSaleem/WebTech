const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");
const indexRoute = require("./routes/index");

// app.get("/", (req, res) => {
//   res.send("hallo hallo aneonghasaeyo");
// });

app.set("views", path.join(__dirname, "views")); //webpages in a views folder, category hi view hay
app.set("view engine", "vash");

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`);
});
