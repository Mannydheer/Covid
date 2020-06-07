const {
  getAllCountryData,
  getSingleCountryData,
} = require("../services/countryService");

const countryController = async (req, res, next) => {
  try {
    let allCountryData = await getAllCountryData();
    if (!allCountryData) {
      throw new Error("Failed fetch for all country data.");
    }
    return res.status(200).json({ status: 200, allCountryData });
  } catch (err) {
    throw new Error(err);
  }
};

//
const selectedCountryController = async (req, res) => {
  try {
    //get country from params.
    let { country } = req.params;
    if (!country) {
      throw new Error("no country received.");
    }
    let countryData = await getSingleCountryData(country);
    if (!countryData) {
      throw new Error("Country not found.");
    }
    res.status(200).json({ status: 200, countryData });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { countryController, selectedCountryController };
