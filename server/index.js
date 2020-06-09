const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

//--------------------HANDLERS--------------------
const {
  countryController,
  selectedCountryController,
} = require("./Country/countryController");

//

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
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

//COUNTRY ENDPOINTS.
app.get("/getCountries", countryController);
app.get("/getSingleCountry/:country", selectedCountryController);

module.exports = app;
