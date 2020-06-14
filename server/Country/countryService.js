//Responsible for all error validation and payload manipulation.
const {
  getAllCountryDataGateway,
  getCountryDataGateway,
} = require("./countryGateway");

const getAllCountryData = async () => {
  try {
    let getData = await getAllCountryDataGateway();
    let countryData = await getData.json();
    let allCountryData = countryData.map(({ country }) => {
      return country;
    });
    return allCountryData;
  } catch (err) {
    return;
  }
};

const getSingleCountryData = async (country) => {
  try {
    let data = await getCountryDataGateway(country);
    return await data.json();
  } catch (err) {
    return;
  }
};

module.exports = { getAllCountryData, getSingleCountryData };
