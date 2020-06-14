import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import styled from "styled-components";

const Chart = ({ countryInfo, setOpen, open }) => {
  const handleRefactor = () => {
    let categories = Object.keys(countryInfo);
    categories.shift();
    let values = Object.values(countryInfo);
    values.shift();
    let chartArray = [];

    categories.forEach((category, index) => {
      let chartObject = {
        category: category,
        values: values[index],
      };
      chartArray.push(chartObject);
    });
    return chartArray;
  };

  useEffect(() => {
    //create chart instance.
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    //series - create instance of PieSeries class and push it into chart series.
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    //----------------CHART DATA--------------------
    //array of objects, each index represented a 'slice'.
    //must contain numeric value: Slice Vlaue and category (Slice Title)
    chart.data = handleRefactor();
    pieSeries.dataFields.value = "values";
    pieSeries.dataFields.category = "categories";
    //animation
  }, [countryInfo]);

  return (
    <Wrapper>
      <StyledWrapper open={open} id="chartdiv" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        {open && <button onClick={() => setOpen(false)}>Cancel</button>}
      </div>
    </Wrapper>
  );
};

export default Chart;
const Wrapper = styled.div`
  position: absolute;
  right: 5vw;
  top: 20vh;
  button {
    z-index: 1000;
    border: none;
    outline: none;
    font-size: 1.1rem;
    margin-top: 5px;
    text-align: center;
    width: 40%;
    border-radius: 25px;
    padding: 5px;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
`;

const StyledWrapper = styled.div`
  width: 50vw;
  height: 30vh;
  transition: transform 0.5s ease-out;
  transform: ${({ open }) => (open ? `scale(1, 1)` : `scale(0, 0)`)};
  padding: 1rem;
`;
