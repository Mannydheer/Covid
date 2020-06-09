//Responsible for all external API communication.
const fetch = require("isomorphic-fetch");

const getAllCountryDataGateway = async () => {
  return await fetch("https://coronavirus-19-api.herokuapp.com/countries");
};

const getCountryDataGateway = async (country) => {
  return await fetch(
    `https://coronavirus-19-api.herokuapp.com/countries/${country}`
  );
};
module.exports = { getAllCountryDataGateway, getCountryDataGateway };
