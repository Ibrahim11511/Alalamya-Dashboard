/* eslint-disable react/prop-types */
import { useState } from "react";
import Styles from "./CompaniesSection.module.css";
export default function CompaniesSection({ apiCompaniesResult }) {
  const [newCompaniesInput, setNewCompaniesInput] = useState([]);

  return (
    <section className={Styles.Companies}>
      <div className={Styles.newCompany}>
        <input
          type="text"
          placeholder="Add New Company"
          value={newCompaniesInput}
          onChange={(e) => setNewCompaniesInput(e.target.value)}
        />
        <button className={Styles.addCompanyBtn}>ADD</button>
      </div>
      <div className={Styles.currentCompaniesContainer}>
        {apiCompaniesResult.map((company) => (
          <span key={company.id} className={Styles.companyBox}>
            {company.companyName}
          </span>
        ))}
      </div>
    </section>
  );
}
