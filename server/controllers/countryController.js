const { getCountryData } = require("../services/countryService");

const countryController = async (req, res) => {
  try {
    let allCountryData = await getCountryData();
    if (!allCountryData) {
      throw new Error("Failed fetch for all country data.");
    }
    return res.status(200).json({ status: 200, allCountryData });
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { countryController };
