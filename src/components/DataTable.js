/* eslint-disable react/prop-types */
import React from "react";

const DataTable = ({ columnTitles, rowTitles, data }) => {
  return (
    <>
      <h2>table</h2>
      <table>
        <tr>
          {columnTitles.map((item) => {
            return <th>{item}</th>;
          })}
        </tr>
        {rowTitles.map((item) => {
          return (
            <tr>
              <th>{item}</th>
              {data[rowTitles.indexOf(item)].map((x) => (
                <td>{x}</td>
              ))}
              <td>2</td>
            </tr>
          );
        })}
        ;
      </table>
    </>
  );
};

export default DataTable;
