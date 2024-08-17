/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Styles from "../companies-section/CompaniesSection.module.css";
import { contextContextMenu } from "../../../Context";
import ContextMenu from "../../Context Menu/ContextMenu";
import { handelContextMenu } from "../../../global";
export default function CustomersSection({ apiCustomersResult }) {
  const { setPosition, setVisible, setContextPath, setContextID } =
    React.useContext(contextContextMenu);
  const [newCustomerInput, setNewCustomerInput] = useState("");
  const handelSingle = (e, id) => {
    handelContextMenu(e, id, setPosition, setVisible, setContextID);
    setContextPath("customers");
  };

  return (
    <section className={Styles.Customers}>
      <ContextMenu />
      <div className={Styles.newCustomer}>
        <input
          type="text"
          placeholder="Add New Company"
          value={newCustomerInput}
          onChange={(e) => setNewCustomerInput(e.target.value)}
        />
        <button className={Styles.addCustomerBtn}>ADD</button>
      </div>
      <div className={Styles.currentCustomersContainer}>
        {apiCustomersResult.map((customer) => (
          <span
            key={`User-key-${customer.customerID}`}
            className={Styles.customerBox}
            onClick={(event) => handelSingle(event, customer.customerID)}
          >
            {customer.customersName}
          </span>
        ))}
      </div>
    </section>
  );
}
