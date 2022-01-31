const axios = require("axios");
const router = require("express").Router;

router.get("/api/questions/:city/:state/:category", (req, res) => {
  const city = req.params.city;
  const state = req.params.state;
  const category = req.params.category;
  axios
    .get(
      `https://api.data.charitynavigator.org/v2/Organizations?app_id=1f111d45&app_key=45644615277bb0eaacf2e9e76d6fb930&state=${state}&city=${city}`
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw new Error(err);
    });
});

module.exports("router");
