import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Country from "../Countries/Country";

const DisplaySearchedCountries = ({
  searchedCountries,
  userTyping,
  keyMovementCounter,
  setUserTyping,
}) => {
  //STATES.
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [open, setOpen] = useState(false);

  //HANDLERS.
  //handle when clicking on a country.
  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setOpen(true);
    setUserTyping(country);
  };
  //handle when pressing enter on a country.
  const handleEventForEnter = (e) => {
    switch (e.code) {
      case "Enter":
        let country = searchedCountries[keyMovementCounter];
        setSelectedCountry(country);
        setOpen(true);
        break;
      case "Escape":
        setOpen(false);
      default:
        break;
    }
  };
  //EVENT LISTENERS FOR ENTER.
  useEffect(() => {
    window.addEventListener("keydown", handleEventForEnter);
    return () => {
      window.removeEventListener("keydown", handleEventForEnter);
    };
  });

  return (
    <Wrapper>
      <Ul>
        {/* Mapping through all the different countries. */}
        {searchedCountries.map((country, index) => {
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
            <Li
              index={index}
              keyMovementCounter={keyMovementCounter}
              onClick={() => handleCountryClick(country)}
              key={country}
            >
              {`${firstPart}`}
              {/* Will change opacity for countries with arrowup and arrowdown. */}
              <strong style={{ opacity: "0.4" }}>{secondPart}</strong>
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
  font-size: 1.2rem;
  margin-bottom: 1px;
  border-radius: 25px;
  opacity: ${({ index, keyMovementCounter }) =>
    index === keyMovementCounter ? `0.8` : `1`};
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Wrapper = styled.div``;
