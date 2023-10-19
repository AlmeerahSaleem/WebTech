const router = require("express").Router();

router.get("/", (req, res) => {
  // res.send("yo satoru");
  fetch("https://dummyjson.com/users")
    .then((res) => res.json()) //converts to json file
    .then((data) =>
      res.render("index", { title: "Jujustsu Kaisen", users: data.users })
    ); //renders //users is the key in api

  //   res.render("index", { title: "JUJUTSU KAISEN", name: "almeerah" }); //json, can add multiple things
}); //root route and callback

module.exports = router; //konsay model ko export karna hay
