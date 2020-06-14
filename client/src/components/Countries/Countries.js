import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "../Search/Search";
const Countries = () => {
  //WIll get all countries available.
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    const handleCountryData = async () => {
      try {
        let response = await fetch("/getCountries");
        let info = await response.json();
        if (info.status !== 200) {
          throw new Error();
          xw;
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
      {countries !== null && <Search countries={countries} />}
    </Wrapper>
  );
};

export default Countries;

//STYLES.
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;

  select {
  }
`;
