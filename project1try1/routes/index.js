const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("yeeee");

  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) =>
      res.render("index", {
        title: "practice",
        users: data.users,
      })
    );

  //   res.render("index", { title: "practice" });
});

module.exports = router;
