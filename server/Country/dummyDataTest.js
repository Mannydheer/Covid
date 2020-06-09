//Data for /getCountries endpoint.
let dummy = [
  {
    country: "World",
    cases: 7271132,
    todayCases: 80685,
    deaths: 411578,
    todayDeaths: 3338,
    recovered: 3581077,
    active: 3278477,
    critical: 53910,
    casesPerOneMillion: 933,
    deathsPerOneMillion: 52,
    totalTests: 0,
    testsPerOneMillion: 0,
  },
  {
    country: "USA",
    cases: 2036209,
    todayCases: 9716,
    deaths: 113707,
    todayDeaths: 652,
    recovered: 776008,
    active: 1146494,
    critical: 16892,
    casesPerOneMillion: 6154,
    deathsPerOneMillion: 344,
    totalTests: 21909214,
    testsPerOneMillion: 66214,
  },
];

let dummyCountryStatistics = {
  country: "Canada",
  cases: 96616,
  todayCases: 372,
  deaths: 7895,
  todayDeaths: 60,
  recovered: 55537,
  active: 33184,
  critical: 1828,
  casesPerOneMillion: 2561,
  deathsPerOneMillion: 209,
  totalTests: 1930141,
  testsPerOneMillion: 51168,
};

module.exports = { dummy, dummyCountryStatistics };
