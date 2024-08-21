import Styles from "./navbar.module.css";
import LogoImage from "../../Images/WhatsApp_Image_2024-08-13_at_1.37.29_PM-removebg-preview.png";
import { MdDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { GiGearHammer } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { PiGearFineFill } from "react-icons/pi";
import { useState } from "react";
export default function NavBar() {
  const [activeAside, setActiveAside] = useState(false);

  return (
    <>
      <div
        className={`${Styles.overLayout} ${activeAside ? Styles.active : null}`}
      ></div>
      <nav className={`${Styles.navBar} ${activeAside ? Styles.active : null}`}>
        <button
          className={Styles.openAndClose}
          onClick={() => setActiveAside(!activeAside)}
        >
          <IoIosArrowForward />
        </button>
        <div className={Styles.header}>Alalamya</div>
        <ul className={Styles.navBarList}>
          <li className={Styles.navBarItem}>
            <NavLink to={"dashboard"}>
              <MdDashboard />
              Dashboardv
            </NavLink>
          </li>
          <li className={Styles.navBarItem}>
            <NavLink to={"companies"}>
              <FaBuilding />
              Companies
            </NavLink>
          </li>
          <li className={Styles.navBarItem}>
            <NavLink to={"customers"}>
              <FaUsers />
              Customers
            </NavLink>
          </li>
          <li className={Styles.navBarItem}>
            <NavLink to={"system"}>
              <GiGearHammer />
              System
            </NavLink>
          </li>
          <li className={Styles.navBarItem}>
            <NavLink to={"work"}>
              <PiGearFineFill />
              Work
            </NavLink>
          </li>
        </ul>
        <div className={Styles.logo}>
          <img src={LogoImage} alt="Logo" />
        </div>
      </nav>
    </>
  );
}
