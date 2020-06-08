import React from "react";

const DisplaySearchedCountries = ({ searchedCountries }) => {
  return (
    <ul>
      {searchedCountries.map((country) => {
        return (
          <li key={country}>
            {console.log(country)}

            {country}
          </li>
        );
      })}
    </ul>
  );
};

export default DisplaySearchedCountries;
