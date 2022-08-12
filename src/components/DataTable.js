import React from "react";
import PropTypes from "prop-types";

const DataTable = ({ columnTitles, rowTitles, data }) => {
  return (
    <>
      <h2>table</h2>
      <table>
        <tbody>
          <tr>
            {React.Children.toArray(
              columnTitles.map((item) => {
                return <th>{item}</th>;
              })
            )}
          </tr>
          {React.Children.toArray(
            rowTitles.map((item) => {
              return (
                <tr>
                  <th>{item}</th>
                  {React.Children.toArray(
                    data[rowTitles.indexOf(item)].map((x) => {
                      return <td>{x}</td>;
                    })
                  )}
                </tr>
              );
            })
          )}
          ;
        </tbody>
      </table>
    </>
  );
};

DataTable.propTypes = {
  columnTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  rowTitles: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};
export default DataTable;
