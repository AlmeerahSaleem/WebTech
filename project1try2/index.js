const express = require("express");
const app = express();
const PORT = 3000;
const indexRoute = require("./routes/index");
const path = require("path");

//to run vash
app.set("views", path.join(__dirname, "views")); //webpages in a views folder, category hi view hay
app.set("view engine", "vash");

//to run json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", indexRoute);

app.listen(PORT, () => {
  console.log(`server is running on port http://localhost:${PORT}`);
});
