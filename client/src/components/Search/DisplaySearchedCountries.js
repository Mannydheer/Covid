import React from "react";

const DisplaySearchedCountries = ({ searchedCountries }) => {
  return (
    <ul>
      {searchedCountries.map((country, index) => {
        return <li key={country}>{country}</li>;
      })}
    </ul>
  );
};

export default DisplaySearchedCountries;
