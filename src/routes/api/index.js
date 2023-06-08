var router = require("express").Router();

router.use("/disc", require("./disc.js"));

module.exports = router;
