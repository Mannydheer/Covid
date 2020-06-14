//Responsible for input/output of endpoints to the Front End.
const { getAllCountryData, getSingleCountryData } = require("./countryService");
const { BadRequestError, NotFoundError } = require("../Error/CustomError");

//@endpoint GET /getCountries
//@desc Fetch to API to get all countries available.
//@access PUBLIC
const countryController = async (req, res, next) => {
  try {
    let allCountryData = await getAllCountryData();
    if (!allCountryData) {
      throw new NotFoundError("Failed fetch for all country data.");
    }
    return res.status(200).json({ status: 200, allCountryData });
  } catch (err) {
    //next middleware will redirect the error to the node.js default error handler.
    next(err);
  }
};

//@endpoint GET /getSingleCountry/:country
//@desc Fetch to API to statistics about a single country.
//@access PUBLIC
const selectedCountryController = async (req, res, next) => {
  try {
    //get country from params.
    let { country } = req.params;
    //!checked by comparing the string value
    if (country === "null") {
      throw new BadRequestError("no country received.");
    }
    // //TODO => Do I need to check for this condition in this case?
    // //TODO => If country is null||undefined, the api will automatically throw a fetchError (500) and will go to the catch
    let countryData = await getSingleCountryData(country);
    if (!countryData) {
      throw new NotFoundError("Country not found.");
    }
    res.status(200).json({ status: 200, countryData });
  } catch (err) {
    next(err);
  }
};

module.exports = { countryController, selectedCountryController };
