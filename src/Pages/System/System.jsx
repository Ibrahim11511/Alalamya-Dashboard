import { useState } from "react";
import NameBox from "../../Components/Name Box/NameBox";
import Styles from "./system.module.css";
import { useEffect } from "react";

export default function System() {
  const [apiCompaniesResult, setApiCompaniesResult] = useState([]);
  const [apiUsersResult, setApiUsersResult] = useState([]);
  const [newCompaniesInput, setNewCompaniesInput] = useState("");

  const getCompanies = async () => {
    fetch("http://localhost:3000/companies")
      .then((res) => res.json())
      .then((data) => {
        data.map((company) => {
          setApiCompaniesResult((prev) => [...prev, company.companyName]);
        });
      });
  };

  const getUsers = async () => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((users) => {
        users.map((user) => {
          setApiUsersResult((prev) => [...prev, user.name]);
        });
      });
  };

  useEffect(() => {
    getCompanies();
    getUsers();
  }, []);

  console.log(apiUsersResult);

  return (
    <main className={Styles.systemPage}>
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
            <NameBox key={`company-name-${company}`} Names={company} />
          ))}
        </div>
      </section>
      <section className={Styles.Users}>
        <div className={Styles.newUser}>
          <input type="text" placeholder="User Name" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Name" />
          <label htmlFor="admin">admin</label>
          <input type="checkbox" />
          <button className={Styles.addUserBtn}>ADD</button>
        </div>
        <div className={Styles.currentUser}>
          {apiUsersResult.map((user) => (
            <NameBox key={`company-name-${user}`} Names={user} />
          ))}
        </div>
      </section>
    </main>
  );
}
