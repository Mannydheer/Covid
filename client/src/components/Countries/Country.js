import React, { useEffect, useState } from "react";

const Country = ({ selectedCountry }) => {
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
    <div>
      {selectedCountry}
      {countryInfo !== null && (
        <div>
          <div>Country: {countryInfo.country}</div>
          <div>Cases: {countryInfo.cases}</div>
          <div>Deaths:{countryInfo.deaths}</div>
        </div>
      )}
    </div>
  );
};

export default Country;
