//Responsible for all API requests.

const getCountryDataGateway = async () => {
  return await fetch("https://api.covid19api.com/countries");
};

module.exports = { getCountryDataGateway };
