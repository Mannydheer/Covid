import React, { useState } from "react";
import styled from "styled-components";
import Country from "../Countries/Country";

const DisplaySearchedCountries = ({ searchedCountries, userTyping }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [open, setOpen] = useState(false);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setOpen(true);
  };

  return (
    <Wrapper>
      <Ul>
        {searchedCountries.map((country) => {
          let firstPart = country
            .split("")
            .splice(0, userTyping.length)
            .join("");
          let secondPart = country
            .split("")
            .splice(userTyping.length, country.length)
            .join("");
          return (
            //logic for bolding word.

            <Li onClick={() => handleCountryClick(country)} key={country}>
              {`${firstPart}`}
              <strong style={{ opacity: "0.3" }}>{secondPart}</strong>
            </Li>
          );
        })}
      </Ul>

      {selectedCountry !== null && (
        <Country
          setOpen={setOpen}
          open={open}
          selectedCountry={selectedCountry}
        />
      )}
    </Wrapper>
  );
};

export default DisplaySearchedCountries;

const Ul = styled.ul``;

const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  list-style-type: none;
  background-color: #475c85;
  width: 100%;
  height: 5vh;
  font-size: 1.6rem;
  margin-bottom: 1px;
  border-radius: 25px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Wrapper = styled.div``;
