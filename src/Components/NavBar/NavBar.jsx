import Styles from "./navbar.module.css";
import LogoImage from "../../Images/WhatsApp_Image_2024-08-13_at_1.37.29_PM-removebg-preview.png";
import { MdDashboard } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <button className={Styles.openAndClose}>
        <IoIosArrowForward />
      </button>
      <div className={Styles.header}>Alalamya</div>
      <ul className={Styles.navBarList}>
        <li className={Styles.navBarItem}>
          <MdDashboard />
          Dashboard
        </li>
        <li className={Styles.navBarItem}>
          <FaBuilding />
          Companies
        </li>
        <li className={Styles.navBarItem}>
          <FaUsers />
          Customers
        </li>
      </ul>
      <div className={Styles.logo}>
        <img src={LogoImage} alt="Logo" />
      </div>
    </nav>
  );
}
