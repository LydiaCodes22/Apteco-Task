import "../styles/App.css";
import React from "react";
import DataTable from "./DataTable";
import startingData from "../data.json";

const columnTitles =
  startingData.dimensionResults[0].headerDescriptions.split("\t");
const rowTitles =
  startingData.dimensionResults[1].headerDescriptions.split("\t");
const data = startingData.measureResults[0].rows.map((item) => {
  const secondaryArray = item.split("\t");
  return secondaryArray;
});

const App = () => {
  return (
    <div>
      <h1>Apteco task</h1>
      <DataTable
        columnTitles={columnTitles}
        rowTitles={rowTitles}
        data={data}
      />
    </div>
  );
};

export default App;
