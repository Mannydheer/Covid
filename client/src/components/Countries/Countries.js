import React, { useState, useEffect } from "react";
import Country from "./Country";
const Countries = () => {
  //WIll get all countries available.
  const [countries, setCountries] = useState(null);
  //store selection in state.
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const handleCountryData = async () => {
      try {
        let response = await fetch("/getCountries");
        let info = await response.json();
        if (info.status !== 200) {
          throw new Error();
        }
        setCountries(info.allCountryData);
      } catch (e) {
        console.error(e);
      }
    };
    handleCountryData();
  }, []);

  return (
    <div>
      {/* SHOW ALL COUNTRIES. */}
      {countries !== null && (
        // The selection will be stored inside state.
        <select onChange={(e) => setSelectedCountry(e.target.value)}>
          {countries.map((country) => {
            return <option key={country}>{country}</option>;
          })}
        </select>
      )}
      {/* SHOW SINGLE COUNTRY. */}
      {selectedCountry !== null && (
        <Country selectedCountry={selectedCountry} />
      )}
    </div>
  );
};

export default Countries;
