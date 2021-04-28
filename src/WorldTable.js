import React from "react";

const WorldTable = (props) => {
  return (
    <div className="my-4 border border-light p-3">
      <h1 className="my-4">World Scores</h1>
      <hr />
      <table>
        {props.worldData.map((data, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td>{data.n}</td>
                <td>{data.s}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default WorldTable;
