const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("hello from router");
  //   res.render("index");
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => res.render("index", { users: data.users }));

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
});

module.exports = router;
