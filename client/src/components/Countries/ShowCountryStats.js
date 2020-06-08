import React from "react";
import styled from "styled-components";

const ShowCountryStats = ({ setOpen, countryInfo, open }) => {
  return (
    <StyledWrapper open={open}>
      <StyledDesc>
        <Title>Country:</Title> <Stat>{countryInfo.country}</Stat>
      </StyledDesc>
      <StyledDesc>
        <Title>Cases:</Title> <Stat>{countryInfo.cases}</Stat>
      </StyledDesc>
      <StyledDesc>
        <Title>Deaths:</Title>
        <Stat>{countryInfo.deaths}</Stat>
      </StyledDesc>
      <StyledDesc>
        <Title>Recovered</Title>
        <Stat>{countryInfo.recovered}</Stat>
      </StyledDesc>
      <button onClick={() => setOpen(false)}>Cancel</button>
    </StyledWrapper>
  );
};

export default ShowCountryStats;

const StyledWrapper = styled.div`
  z-index: 1000;
  background-color: white;
  color: black;
  border: solid 2px black;
  position: absolute;
  top: 30vh;
  left: 40vw;
  transition: transform 0.5s ease-out;
  transform: ${({ open }) => (open ? `scale(1, 1)` : `scale(0, 0)`)};
  width: 20vw;
  display: flex;
  flex-flow: nowrap column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  button {
    background-color: red;
    border: none;
    outline: none;
    font-size: 1.1rem;
    margin-top: 5px;

    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const StyledDesc = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.div`
  width: 50%;
  text-align: center;
  color: green;
`;

const Stat = styled.div`
  width: 50%;
  text-align: center;
`;
