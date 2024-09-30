/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import {
  allValuesPresent,
  capitalizeText,
  getDate,
  handelInputsGroupChange,
} from "../../../../global";
import Styles from "./lasersection.module.css";
import React, { useState } from "react";
import { contextWorkPage } from "../../../../Context";
export default function LaserSection({ customers, laserStatementData }) {
  const { refreshData, setRefreshData } = React.useContext(contextWorkPage);
  const [newLaserStatement, setNewLaserStatement] = useState({
    time: 5,
    date: "",
    thickness: "",
    sheetAmount: "",
    customerName: "",
    materialType: "",
    sheetDimension: "",
    ProcessType: "laser",
  });
  const requestHeaders = { "Content-Type": "application/json" };

  const handelLaserStatement = (e) => {
    e.preventDefault();
    setNewLaserStatement((prev) => ({ ...prev, date: getDate() }));
    if (allValuesPresent(newLaserStatement)) {
      setRefreshData(!refreshData);
      fetch("http://localhost:3000/laserStatement", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(newLaserStatement),
      }).then((res) => res.json()).finally;
      setNewLaserStatement(() => ({
        time: 5,
        date: "",
        thickness: "",
        sheetAmount: "",
        customerName: "",
        materialType: "",
        sheetDimension: "",
      }));
    }
  };

  const updateState = async (state) => {
    const { value: formValues } = await Swal.fire({
      title: "State Data",
      width: "450px",
      html: `
      <label>Time</label>
      <input type='number' id='swal-input1' class="swal2-input" value="${state.time}">
      <label>Thickness</label>
      <input type='number' id='swal-input2' class="swal2-input" value="${state.thickness}">
      <label>Type</label>
      <input type='text' id='swal-input3' class="swal2-input" value="${state.materialType}">
      <label>Sheet Amount</label>
      <input type='number' id='swal-input4' class="swal2-input" value="${state.sheetAmount}">
      <label>Sheet Dimension</label>
      <input type='text' id='swal-input5' class="swal2-input" value="${state.sheetDimension}">
    `,
      focusConfirm: false,
      preConfirm: async () => {
        try {
          const response = await fetch(
            `http://localhost:3000/laserStatement/${state.id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                time: document.getElementById("swal-input1").value,
                date: state.date,
                thickness: document.getElementById("swal-input2").value,
                sheetAmount: document.getElementById("swal-input4").value,
                customerName: state.customerName,
                materialType: document.getElementById("swal-input3").value,
                sheetDimension: document.getElementById("swal-input5").value,
              }),
            }
          );
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          return await response.json();
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: `Something went wrong: ${error.message}`,
            icon: "error",
          });
          return false;
        }
      },
    });

    if (formValues) {
      Swal.fire({
        title: "Done Updated",
        text: `State of customer ${capitalizeText(
          state.customerName
        )} has been updated`,
        icon: "success",
      });
    }
  };

  return (
    <section className={Styles.laserSection}>
      <h2>Laser job statement</h2>
      <form>
        <input
          style={{ textTransform: "capitalize" }}
          placeholder="Customer Name"
          list="customersGroupe"
          name="customerName"
          onChange={(e) => handelInputsGroupChange(e, setNewLaserStatement)}
        />
        <datalist id="customersGroupe" label="Customer Name">
          {customers.map((customer) => {
            return (
              <option
                key={`customer-key-workPage-${customer.id}`}
                value={`${customer.customerName}`}
              >
                {capitalizeText(customer.customerName)}
              </option>
            );
          })}
        </datalist>
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
          {laserStatementData.map((state) => (
            <tr
              key={`laser-state-key-${state.id}`}
              onClick={() => updateState(state)}
            >
              <td>{state.date}</td>
              <td>{capitalizeText(state.customerName)}</td>
              <td>{`${state.time} min`}</td>
              <td>{`${state.thickness} mm`}</td>
              <td>{state.materialType}</td>
              <td>{state.sheetAmount}</td>
              <td>{`${state.sheetDimension} cm`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
