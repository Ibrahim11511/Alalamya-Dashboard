import { useState } from "react";
import Styles from "./system.module.css";
import { useEffect } from "react";
import CompaniesSection from "../../Components/System/companies-section/CompaniesSection";
import UsersSection from "../../Components/System/users-section/UsersSection";
import { contextContextMenu } from "../../Context.js";
import CustomersSection from "../../Components/System/customers-section/Customers";

export default function System() {
  const [newCompaniesInput, setNewCompaniesInput] = useState("");
  const [newCustomersInput, setNewCustomersInput] = useState("");
  const [newUserInput, setNewUserInput] = useState({
    name: "",
    userName: "",
    password: "",
    role: "",
  });
  const [apiCompaniesResult, setApiCompaniesResult] = useState([]);
  const [apiUsersResult, setApiUsersResult] = useState([]);
  const [apiCustomersResult, setApiCustomersResult] = useState([]);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [contextPath, setContextPath] = useState("");
  const [contextID, setContextID] = useState("");
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
  const getCustomers = async () => {
    const response = await fetch("http://localhost:3000/customers");
    const data = await response.json();
    setApiCustomersResult(() => data);
  };

  useEffect(() => {
    getCompanies();
    getUsers();
    getCustomers();
  }, [newCompaniesInput, newCustomersInput, newUserInput]);

  return (
    <main className={Styles.systemPage}>
      <contextContextMenu.Provider
        value={{
          position,
          setPosition,
          visible,
          setVisible,
          contextPath,
          setContextPath,
          contextID,
          setContextID,
        }}
      >
        <CompaniesSection
          apiCompaniesResult={apiCompaniesResult}
          newCompaniesInput={newCompaniesInput}
          setNewCompaniesInput={setNewCompaniesInput}
        />
        <UsersSection
          apiUsersResult={apiUsersResult}
          newUserInput={newUserInput}
          setNewUserInput={setNewUserInput}
        />
        <CustomersSection
          apiCustomersResult={apiCustomersResult}
          newCustomersInput={newCustomersInput}
          setNewCustomersInput={setNewCustomersInput}
        />
      </contextContextMenu.Provider>
    </main>
  );
}
