/* eslint-disable react/prop-types */
// import { useState } from "react";
import {
  allValuesPresent,
  capitalizeText,
  getDate,
  handelInputsGroupChange,
} from "../../../../global";
import Styles from "./lasersection.module.css";
export default function LaserSection({
  customers,
  newLaserStatement,
  setNewLaserStatement,
  laserStatementData,
}) {
  const requestHeaders = { "Content-Type": "application/json" };
  const handelLaserStatement = (e) => {
    e.preventDefault();
    setNewLaserStatement((prev) => ({ ...prev, date: getDate() }));
    if (allValuesPresent(newLaserStatement)) {
      fetch("http://localhost:3000/laserStatement", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(newLaserStatement),
      })
        .then((res) => res.json())
        .finally(
          setNewLaserStatement({
            time: 5,
            date: "",
            thickness: "",
            sheetAmount: "",
            customerName: "",
            materialType: "",
            sheetDimension: "",
          })
        );
    }
  };
  return (
    <section className={Styles.laserSection}>
      <h2>Laser job statement</h2>
      <form>
        <select
          autoFocus
          name="customerName"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        >
          <option value="" disabled="disable" selected>
            Customer Name
          </option>
          {customers.map((customer) => (
            <option
              key={`customer-key-workPage-${customer.id}`}
              value={`${customer.customerName}`}
            >
              {capitalizeText(customer.customerName)}
            </option>
          ))}
        </select>
        <input
          value={newLaserStatement.time}
          type="number"
          placeholder="Time"
          name="time"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        />
        <input
          value={newLaserStatement.thickness}
          type="number"
          placeholder="Thickness"
          name="thickness"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        />
        <input
          value={newLaserStatement.materialType}
          type="text"
          placeholder="Type"
          name="materialType"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        />
        <input
          value={newLaserStatement.sheetAmount}
          type="number"
          placeholder="Sheet Amount"
          name="sheetAmount"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        />
        <input
          value={newLaserStatement.sheetDimension}
          type="text"
          name="sheetDimension"
          placeholder="Sheet Dimension"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        />
        <input type="submit" onClick={(e) => handelLaserStatement(e)} />
        <input
          type="reset"
          onClick={() =>
            setNewLaserStatement({
              time: 5,
              date: "",
              thickness: "",
              sheetAmount: "",
              customerName: "",
              materialType: "",
              sheetDimension: "",
            })
          }
        />
      </form>
      <table className={Styles.styledTable}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Name</th>
            <th>Time</th>
            <th>Thickness</th>
            <th>Type</th>
            <th>Sheet Amount</th>
            <th>Sheet Dimension</th>
          </tr>
        </thead>
        <tbody>
          {laserStatementData.map((stat) => (
            <tr key={`laser-stat-key-${stat.id}`}>
              <td>{stat.date}</td>
              <td>{capitalizeText(stat.customerName)}</td>
              <td>{`${stat.time} min`}</td>
              <td>{stat.thickness}</td>
              <td>{stat.materialType}</td>
              <td>{stat.sheetAmount}</td>
              <td>{stat.sheetDimension}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
