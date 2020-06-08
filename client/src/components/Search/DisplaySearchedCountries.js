import React, { useState } from "react";
import styled from "styled-components";
import Country from "../Countries/Country";

const DisplaySearchedCountries = ({ searchedCountries, userTyping }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

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

            <Li onClick={() => setSelectedCountry(country)} key={country}>
              {`${firstPart}`}
              <strong style={{ opacity: "0.3" }}>{secondPart}</strong>
            </Li>
          );
        })}
      </Ul>
      {selectedCountry !== null && (
        <Country selectedCountry={selectedCountry} />
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
  width: 70vw;
  height: 5vh;
  font-size: 1.6rem;
  margin: 2px;
  border-radius: 25px;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Wrapper = styled.div``;
