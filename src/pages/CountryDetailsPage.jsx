import React, { useState, useEffect } from "react";

function CountryDetails() {
  return (
    <div className="container">
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

      <h1>Country Name</h1>

      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: "30%" }}>Capital</td>
            <td>Captial Name</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              country area
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                <li>
                  <a href="">Countries bordered by</a>
                </li>
                <li>
                  <a href="">Countries bordered by</a>
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CountryDetails;
