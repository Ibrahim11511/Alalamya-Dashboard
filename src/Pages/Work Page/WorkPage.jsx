import { useState } from "react";
import LaserContainer from "../../Components/Work/Containers/Laser/LaserContainer";
import { contextWorkPage } from "../../Context";
export default function WorkPage() {
  const [customers, setCustomers] = useState([]);
  return (
    <div>
      <contextWorkPage.Provider value={{ customers, setCustomers }}>
        <LaserContainer />
      </contextWorkPage.Provider>
    </div>
  );
}
