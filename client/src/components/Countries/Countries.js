import React, { useState, useEffect } from "react";

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
      {countries !== null && (
        <select>
          {countries.map((country) => {
            return <option key={country}>{country}</option>;
          })}
        </select>
      )}
    </div>
  );
};

export default Countries;
