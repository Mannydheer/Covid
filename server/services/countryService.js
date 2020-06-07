const { getCountryDataGateway } = require("../gateway/countryGateway");

const getCountryData = async () => {
  let getData = await getCountryDataGateway();
  if (getData.status !== 200) {
    return;
  }
  let countryData = await getData.json();
  let allCountryData = countryData.map(({ Country }) => {
    return Country;
  });
  return allCountryData;
};

module.exports = { getCountryData };
