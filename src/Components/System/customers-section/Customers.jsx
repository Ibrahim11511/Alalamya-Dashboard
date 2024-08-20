/* eslint-disable react/prop-types */
// import React, { useState } from "react";
import Styles from "../companies-section/CompaniesSection.module.css";
import { contextContextMenu } from "../../../Context";
import ContextMenu from "../../Context Menu/ContextMenu";
import { handelContextMenu } from "../../../global";
import React from "react";
export default function CustomersSection({
  apiCustomersResult,
  newCustomersInput,
  setNewCustomersInput,
}) {
  const { setPosition, setVisible, setContextPath, setContextID } =
    React.useContext(contextContextMenu);
  const handelSingle = (e, id) => {
    handelContextMenu(e, id, setPosition, setVisible, setContextID);
    setContextPath("customers");
  };
  const requestHeaders = { "Content-Type": "application/json" };
  const requestBody = {
    customerName: newCustomersInput,
    customerNameInvoices: [],
  };
  const postAnewCustomer = () => {
    if (newCustomersInput) {
      fetch("http://localhost:3000/customers", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then(console.log);
    }
    setNewCustomersInput("");
  };

  return (
    <section className={Styles.Customers}>
      <ContextMenu />
      <div className={Styles.newCustomer}>
        <input
          type="text"
          placeholder="Add New Company"
          value={newCustomersInput}
          onChange={(e) => setNewCustomersInput(e.target.value)}
        />
        <button className={Styles.addCustomerBtn} onClick={postAnewCustomer}>
          ADD
        </button>
      </div>
      <div className={Styles.currentCustomersContainer}>
        {apiCustomersResult.map((customer) => (
          <span
            key={`User-key-${customer.id}`}
            className={Styles.customerBox}
            onClick={(event) => handelSingle(event, customer.id)}
          >
            {customer.customerName}
          </span>
        ))}
      </div>
    </section>
  );
}
