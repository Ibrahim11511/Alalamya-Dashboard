import Styles from "./contextMenu.module.css";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import React from "react";
import { contextContextMenu } from "../../Context";
export default function ContextMenu() {
  const { position, visible, contextPath, contextID } =
    React.useContext(contextContextMenu);

  return (
    <div
      className={Styles.contextMenu}
      style={{
        display: visible ? "block" : "none",
        left: `${position?.x}px`,
        top: `${position?.y}px`,
      }}
    >
      <ul className={Styles.menu}>
        <li className={Styles.link}>
          <Link to={`./${contextPath}/${contextID}`}>
            <IoOpenOutline />
            Open Page
          </Link>
        </li>
        <li className={Styles.link}>
          <Link to={`./${contextPath}`}>
            <FaUsers />
            {`Global ${contextPath}'s Page`}
          </Link>
        </li>
        <li className={Styles.link}>
          <Link>
            <MdDeleteForever />
            Delete
          </Link>
        </li>
      </ul>
    </div>
  );
}
