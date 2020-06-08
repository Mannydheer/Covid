import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShowCountryStats from "./ShowCountryStats";

const Country = ({ selectedCountry, setOpen, open }) => {
  const [countryInfo, setCountryInfo] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        let response = await fetch(`/getSingleCountry/${selectedCountry}`);
        let data = await response.json();
        setCountryInfo(data.countryData);
      } catch (e) {
        throw new Error(e);
      }
    };
    fetchCountryData();
  }, [selectedCountry]);

  return (
    <CountryWrapper>
      {countryInfo !== null && (
        <ShowCountryStats
          setOpen={setOpen}
          open={open}
          countryInfo={countryInfo}
        />
      )}
    </CountryWrapper>
  );
};

export default Country;

const CountryWrapper = styled.div``;
