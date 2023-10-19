// 4 lines u always have to BASIC
const express = require("express");
const app = express();
const PORT = 4000;
const indexRoute = require("./routes/index");
const path = require("path");

// we sent this to router wala index
// app.get("/", (req, res) => {
//   res.send("hello");
// }); //root route and callback

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
