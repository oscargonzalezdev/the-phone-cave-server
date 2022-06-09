const { default: axios } = require("axios");

const router = require("express").Router();
const data = require("../data/phones.json");

router.get("/phones", (req, res, next) => {
  res.json(data);
});

router.get("/phones/:id", (req, res, next) => {
  const id = req.params.id;
  const details = data.find(item =>{ return item.id = id})
  res.json(details);
});

module.exports = router;
