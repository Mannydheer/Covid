const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = 4000;
const fetch = require("isomorphic-fetch");

//
const handleCountries = async (req, res) => {
  try {
    let response = await fetch("https://api.covid19api.com/countries");
    if (response.status !== 200) {
      throw new Error("Failed fetch for all country data.");
    }
    let countryData = await response.json();
    let allCountryData = countryData.map(({ Country }) => {
      return Country;
    });
    return res.status(200).json({ status: 200, allCountryData });
  } catch (err) {
    throw new Error(err);
  }
};

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/getCountries", handleCountries);

app.listen(port, () => console.log(`listening at http://localhost:${port}`));
