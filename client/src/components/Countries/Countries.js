import React, { useState, useEffect } from "react";
import Country from "./Country";
import styled from "styled-components";
import Search from "../Search/Search";
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
    <Wrapper>
      {/* SHOW ALL COUNTRIES. */}
      <div>
        {countries !== null && (
          <Search countries={countries} />
          // The selection will be stored inside state.
          // <select onChange={(e) => setSelectedCountry(e.target.value)}>
          //   {countries.map((country) => {
          //     return <option key={country}>{country}</option>;
          //   })}
          // </select>
        )}
      </div>
      {/* SHOW SINGLE COUNTRY. */}
      {selectedCountry !== null && (
        <Country selectedCountry={selectedCountry} />
      )}
    </Wrapper>
  );
};

export default Countries;

//STYLES.
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #34435e;
  padding: 0;
  margin: 0;

  select {
  }
`;
