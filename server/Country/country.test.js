const app = require("../index"); // Link to your server file
const supertest = require("supertest");
const request = supertest(app);
const nock = require("nock");
const { dummy, dummyCountryStatistics } = require("./dummyDataTest");

//----------------------------/getCountries --------------------
//@desc Test for 200.
describe("GET /getCountries", () => {
  it("responds with all countries from API.", async () => {
    //nock will be the URL of the API.
    nock("https://coronavirus-19-api.herokuapp.com")
      //CRUD operations will be to the query params of that URL.
      .get("/countries")
      .reply(200, dummy);
    //Data expected from response back from the API.
    const expected = ["World", "USA"];
    const response = await request.get("/getCountries");
    //check if the the response contains the array from expected.
    expect(response.body.allCountryData).toEqual(
      expect.arrayContaining(expected)
    );
    expect(response.status).toBe(200);
  });
});

//@desc Test for 404.
describe("GET /getCountries", () => {
  it("responds with all countries from API.", async () => {
    //nock will be the URL of the API.
    nock("https://coronavirus-19-api.herokuapp.com")
      //CRUD operations will be to the query params of that URL.
      .get("/countries")
      .reply(404, undefined);
    //Data expected from response back from the API.
    const expected = undefined;
    const response = await request.get("/getCountries");
    //check if the the response contains the array from expected.
    expect(response.body.allCountryData).toEqual(expected);
    expect(response.status).toBe(404);
  });
});

//----------------------------/getSingleCountry/:country --------------------
//@desc Test for 200.
describe("GET /getSingleCountry/:country", () => {
  it("responds with COVID statistics about a country.", async () => {
    let testCountry = "canada";
    //nock will be the URL of the API.
    nock("https://coronavirus-19-api.herokuapp.com")
      //CRUD operations will be to the query params of that URL.
      .get(`/countries/${testCountry}`)
      .reply(200, dummyCountryStatistics);
    //compared cases in object.
    const expectedCases = 96616;
    const expectedCountry = "Canada";
    const response = await request.get(`/getSingleCountry/${testCountry}`);
    expect(response.body.countryData).toEqual(
      expect.objectContaining({
        country: expectedCountry,
        cases: expectedCases,
      })
    );
    expect(response.status).toBe(200);
  });
});
//@desc Test for 400 (BadRequest Error). This will check if the params passed in is either NULL
describe("GET /getSingleCountry/:country", () => {
  it("responds with COVID statistics about a country.", async () => {
    let testCountry = null;
    const response = await request.get(`/getSingleCountry/${testCountry}`);
    expect(response.status).toBe(400);
  });
});
//@desc Test for 400 (BadRequest Error). This will check if the params passed in is either UNDEFINED
describe("GET /getSingleCountry/:country", () => {
  it("responds with COVID statistics about a country.", async () => {
    let testCountry = undefined;
    const response = await request.get(`/getSingleCountry/${testCountry}`);
    expect(response.status).toBe(400);
  });
});
//@desc Test for 404 (NotFound Error). This will make sure that the country params passed is VALID, this will check if the country data exists.
describe("GET /getSingleCountry/:country", () => {
  it("responds with COVID statistics about a country.", async () => {
    let testCountry = "canadadada";
    const response = await request.get(`/getSingleCountry/${testCountry}`);
    expect(response.status).toBe(404);
  });
});
