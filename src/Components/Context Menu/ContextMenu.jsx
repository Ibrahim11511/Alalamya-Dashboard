import Styles from "./contextMenu.module.css";
import { Link } from "react-router-dom";
import { IoOpenOutline } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import React from "react";
import { contextContextMenu } from "../../Context";
import Swal from "sweetalert2";
import { handelDeleteRequest } from "../../global";
export default function ContextMenu() {
  const { position, visible, contextPath, contextID } =
    React.useContext(contextContextMenu);

  const handelDeleteBtnClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You will delete from ${contextPath}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        handelDeleteRequest(contextPath, contextID);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

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
        <li className={Styles.link} onClick={handelDeleteBtnClick}>
          <Link>
            <MdDeleteForever />
            Delete
          </Link>
        </li>
      </ul>
    </div>
  );
}
