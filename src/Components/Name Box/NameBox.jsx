/* eslint-disable react/prop-types */
import Styles from "./CompanyBox.module.css";
export default function NameBox({ Names }) {
  return <div className={Styles.companyBox}>{Names}</div>;
}
