const express = require("express");
const mapquest = require("mapquest");
const DarkSky = require("dark-sky");
const moment = require("moment");
const router = express.Router();

const darksky = new DarkSky("1888ea10d69f1a2cd8a4b3554fa1942e");

router.get("/", (req, res) => {
  res.send("Home Page for Weather Application");
});

router.post("/", (req, res) => {
  const address = req.body.address;
  mapquest.geocode(
    { address: address, key: "AaRK24xJjIIuEXHr2QcGKn9FGNZynzIN" },
    (err, location) => {
      darksky
        .coordinates({ lat: location.latLng.lat, lng: location.latLng.lng })
        .units("ca")
        .get()
        .then(result => {
          console.log(moment(result.currently.time).format("h:mm:ss"));
          res.send(result.currently);
        })
        .catch(err => {
          console.log("Error in dark sky: ", err);
        });
    }
  );
});

router.get("/address", (req, res) => {
  res.send(req.body);
});

router.get("/result", (req, res) => {
  res.send(req.body);
});

module.exports = router;
