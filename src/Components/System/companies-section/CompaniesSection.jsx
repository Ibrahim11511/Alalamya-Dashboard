/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import Styles from "./CompaniesSection.module.css";
import { contextContextMenu } from "../../../Context";
import { handelContextMenu } from "../../../global";
// import ContextMenu from "../../Context Menu/ContextMenu";
export default function CompaniesSection({
  apiCompaniesResult,
  setNewCompaniesInput,
  newCompaniesInput,
}) {
  const requestHeaders = { "Content-Type": "application/json" };
  const requestBody = {
    companyName: newCompaniesInput,
    companyInvoices: [],
  };
  const { setPosition, setVisible, setContextPath, setContextID } =
    React.useContext(contextContextMenu);

  const handelSingle = (e, id) => {
    handelContextMenu(e, id, setPosition, setVisible, setContextID);
    setContextPath("companies");
  };

  const postAnewCompany = () => {
    if (newCompaniesInput) {
      fetch("http://localhost:3000/companies", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then(console.log);
    }
    setNewCompaniesInput("");
  };

  useEffect(() => {}, []);

  return (
    <section className={Styles.Companies}>
      <div className={Styles.newCompany}>
        <input
          type="text"
          placeholder="Add New Company"
          value={newCompaniesInput}
          onChange={(e) => setNewCompaniesInput(e.target.value)}
        />
        <button
          className={Styles.addCompanyBtn}
          onClick={() => postAnewCompany()}
        >
          ADD
        </button>
      </div>
      <div className={Styles.currentCompaniesContainer}>
        {apiCompaniesResult.map((company) => (
          <span
            key={`company-key-${company.id}`}
            onClick={(event) => handelSingle(event, company.id)}
            className={Styles.companyBox}
          >
            {company.companyName}
          </span>
        ))}
      </div>
    </section>
  );
}
