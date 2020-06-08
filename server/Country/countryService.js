//Responsible for all error validation and payload manipulation.
const {
  getAllCountryDataGateway,
  getCountryDataGateway,
} = require("./countryGateway");

const getAllCountryData = async () => {
  let getData = await getAllCountryDataGateway();
  if (getData.status !== 200) {
    return;
  }
  let countryData = await getData.json();
  let allCountryData = countryData.map(({ country }) => {
    return country;
  });
  return allCountryData;
};

const getSingleCountryData = async (country) => {
  let data = await getCountryDataGateway(country);
  if (data.status !== 200) {
    return;
  }
  return await data.json();
};

module.exports = { getAllCountryData, getSingleCountryData };
