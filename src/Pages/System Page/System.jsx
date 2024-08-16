import { useState } from "react";
import Styles from "./system.module.css";
import { useEffect } from "react";
import CompaniesSection from "../../Components/System/companies-section/CompaniesSection";
import UsersSection from "../../Components/System/users-section/UsersSection";

export default function System() {
  const [apiCompaniesResult, setApiCompaniesResult] = useState([]);
  const [apiUsersResult, setApiUsersResult] = useState([]);
  // const [apiCustomersResult, setApiCustomersResult] = useState([]);
  // const [newCompaniesInput, setNewCompaniesInput] = useState("");

  const getCompanies = async () => {
    const response = await fetch("http://localhost:3000/companies");
    const data = await response.json();
    setApiCompaniesResult(() => data);
  };

  const getUsers = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    setApiUsersResult(() => data);
  };

  // const getCustomers = async () => {
  //   fetch("http://localhost:3000/customers")
  //     .then((res) => res.json())
  //     .then((customers) => {
  //       customers.map((customer) => {
  //         setApiCustomersResult((prev) => [...prev, customer.customersNAme]);
  //       });
  //     });
  // };

  useEffect(() => {
    getCompanies();
    getUsers();
  }, []);

  return (
    <main className={Styles.systemPage}>
      <CompaniesSection apiCompaniesResult={apiCompaniesResult} />
      <UsersSection apiUsersResult={apiUsersResult} />
    </main>
  );
}
