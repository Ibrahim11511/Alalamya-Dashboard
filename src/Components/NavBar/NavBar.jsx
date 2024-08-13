import Styles from "./navbar.module.css";
export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <div className="header">Alalamya</div>
      <ul className={Styles.navBarList}>
        <li className={Styles.navBarItem}>Dashboard</li>
        <li className={Styles.navBarItem}>Companies</li>
        <li className={Styles.navBarItem}>Customers</li>
      </ul>
      <div className="logo">
        <img src="" alt="" />
      </div>
    </nav>
  );
}
