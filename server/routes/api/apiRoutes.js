const axios = require("axios");
const router = require("express").Router;
const appId = process.env.REACT_APP_APP_ID;
const appKey = process.env.REACT_APP_APP_KEY;

router.get("/api/questions/:city/:state/:category", (req, res) => {
  const city = req.params.city;
  const state = req.params.state;
  const category = req.params.category;
  axios
    .get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=${appId}&app_key=${appKey}&state=${state}&city=${city}`
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw new Error(err);
    });
});

module.exports("router");
