// /* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import LaserSection from "../../Sections/Laser/LaserSection";
import Styles from "./lasercontaner.module.css";
import { contextWorkPage } from "../../../../Context";
export default function LaserContainer() {
  const [newLaserStatement, setNewLaserStatement] = useState({
    time: 5,
    date: "",
    thickness: "",
    sheetAmount: "",
    customerName: "",
    materialType: "",
    sheetDimension: "",
  });
  const [laserStatementData, setLaserStatementData] = useState([]);
  const { customers, setCustomers } = React.useContext(contextWorkPage);

  const getCustomers = async () => {
    const response = await fetch("http://localhost:3000/customers");
    const data = await response.json();
    setCustomers(data);
  };

  const getLaserStatementData = async () => {
    const response = await fetch("http://localhost:3000/laserStatement");
    const data = await response.json();
    setLaserStatementData(data);
  };

  getCustomers();

  useEffect(() => {
    getLaserStatementData();
  }, [laserStatementData]);

  return (
    <main className={Styles.workPage}>
      <LaserSection
        customers={customers}
        newLaserStatement={newLaserStatement}
        setNewLaserStatement={setNewLaserStatement}
        laserStatementData={laserStatementData}
      />
    </main>
  );
}
