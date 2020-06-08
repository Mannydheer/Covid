import React, { useState, useEffect } from "react";
import DisplaySearchedCountries from "./DisplaySearchedCountries";
import styled from "styled-components";
import Country from "../Countries/Country";

const Search = ({ countries }) => {
  const [userTyping, setUserTyping] = useState("");
  const [searchedCountries, setSearchedCountries] = useState("");
  const [keyMovementCounter, setKeyMovementCounter] = useState(0);

  useEffect(() => {
    if (userTyping !== "") {
      //filter through the data.
      let filteredCountries = countries.filter((country) => {
        let splicedCountry = country
          //split the string into an array.
          .split("")
          //splice beg of country name to how many letters user typed.
          .splice(0, userTyping.length)
          //join the array, back into a stirng.
          .join("");
        if (splicedCountry.toLowerCase().includes(userTyping.toLowerCase())) {
          return country;
        }
      });
      setSearchedCountries(filteredCountries);
    }
    //if userTyping === "" then reset.
    else if (userTyping === "") {
      setSearchedCountries("");
    }
    //condition - if the data includes what user is typing.
  }, [userTyping]);

  //--------------------Keyboard presses-------------------

  const handleEvent = (e) => {
    switch (e.code) {
      case "ArrowDown":
        if (keyMovementCounter < searchedCountries.length - 1) {
          setKeyMovementCounter(keyMovementCounter + 1);
        }
        break;
      case "ArrowUp":
        if (keyMovementCounter > 0) {
          setKeyMovementCounter(keyMovementCounter - 1);
        }
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEvent);
    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  });

  return (
    <SearchWrapper>
      <input
        onChange={(e) => setUserTyping(e.target.value)}
        type="text"
        placeholder="Search..."
      ></input>
      {/*PASS SEARCHED STATE TO DisplaySearchedCountries */}
      {searchedCountries !== "" && (
        <DisplaySearchedCountries
          userTyping={userTyping}
          searchedCountries={searchedCountries}
          keyMovementCounter={keyMovementCounter}
        />
      )}
      {/* SHOW STATISTICS FOR SELECTED COUNTRY. */}
    </SearchWrapper>
  );
};

export default Search;

const SearchWrapper = styled.div`
  input {
    font-size: 1.2rem;
    width: 70vw;
    border-radius: 25px;
    border: none;
    outline: none;
    padding: 0.7rem;
  }
`;
