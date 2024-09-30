/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import LaserSection from "../../Sections/Laser/LaserSection";
import Styles from "./lasercontaner.module.css";
import { contextWorkPage } from "../../../../Context";
export default function LaserContainer() {
  const [laserStatementData, setLaserStatementData] = useState([]);
  const { customers, setCustomers, refreshData } =
    React.useContext(contextWorkPage);

  const getCustomers = async () => {
    const response = await fetch("http://localhost:3000/customers");
    const data = await response.json();
    setCustomers(() => data);
  };

  const getLaserStatementData = async () => {
    const response = await fetch("http://localhost:3000/laserStatement");
    const data = await response.json();
    setLaserStatementData(() => data);
  };

  useEffect(() => {
    getLaserStatementData();
  }, [refreshData]);

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <main className={Styles.workPage}>
      <LaserSection
        customers={customers}
        laserStatementData={laserStatementData}
      />
    </main>
  );
}
