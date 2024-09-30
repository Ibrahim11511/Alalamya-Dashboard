import { useState } from "react";
import LaserContainer from "../../Components/Work/Containers/Laser/LaserContainer";
import { contextWorkPage } from "../../Context";
export default function WorkPage() {
  const [customers, setCustomers] = useState([]);
  const [refreshData, setRefreshData] = useState(true);

  return (
    <div>
      <contextWorkPage.Provider
        value={{ customers, setCustomers, refreshData, setRefreshData }}
      >
        <LaserContainer />
      </contextWorkPage.Provider>
    </div>
  );
}
