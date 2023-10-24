const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("aneonghasaeyo");
  res.render("index");
});

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

module.exports = router;
