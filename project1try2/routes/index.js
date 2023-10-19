const router = require("express").Router();

router.get("/", (req, res) => {
  //   res.send("Hello World!");
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => res.render("index", { products: data.products }));
});

module.exports = router;
