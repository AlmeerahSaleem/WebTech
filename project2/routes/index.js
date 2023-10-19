const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("YO SATORU!");
  //   res.render("index", { queen: "almeerah" });
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) =>
      res.render("index", { queen: "almeerah", users: data.users })
    );
}); //route + call back

router.get("/form", (req, res) => {
  res.render("form");

  router
    .route("/save")
    .get((req, res) => {
      console.log(req.query);
      res.end();
    })
    .post((req, res) => {
      console.log(req.body);
      res.end();
    });
});
// router.get("/save", (req, res) => {
//   console.log(req.query);
//   res.end();
// });
// router.post("/save", (req, res) => {
//   console.log(req.body);
//   res.end();
// });

module.exports = router; // we export to home index ka index throu router
