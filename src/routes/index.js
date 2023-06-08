var router = require("express").Router();

router.use("/api", require("./api/index.js"));

router.get("/", (req, res) => {
  res.send("Hello World!");
});

module.exports = router;
