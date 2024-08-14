/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import CompanyBox from "../../Components/company/CompanyBox";
import Styles from "./system.module.css";
import { useEffect } from "react";

export default function System() {
  const [apiCompaniesResult, setApiCompaniesResult] = useState([]);

  const getCompanies = async () => {
    fetch("http://localhost:3000/companies")
      .then((res) => res.json())
      .then((data) => {
        setApiCompaniesResult(data || []);
      });
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <main className={Styles.systemPage}>
      <section className={Styles.Companies}>
        <div className={Styles.newCompany}>
          <input type="text" placeholder="Enter Company name" />
          <button className={Styles.addCompanyBtn}>ADD</button>
        </div>
        <div className={Styles.currentCompaniesContainer}>
          {apiCompaniesResult.map((company) => (
            <CompanyBox key={company.id} company={company} />
          ))}
        </div>
      </section>
    </main>
  );
}
