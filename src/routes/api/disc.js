var router = require("express").Router();

var Disc = require("../../services/disc.service.js");

// get all discs. http://localhost:3000/api/disc/
router.get("/", (req, res) => {
  Disc.get_all().then((re) => {
    res.json(re);
  });
});

// get disc by id. http://localhost:3000/api/disc/1
router.get("/:id", (req, res) => {
  if (!req.params.id) {
    return res.status(404);
  }

  Disc.get_by_id(req.params.id).then((re) => {
    res.json(re);
  });
});

module.exports = router;
