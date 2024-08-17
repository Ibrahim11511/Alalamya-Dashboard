/* eslint-disable react/prop-types */
import ContextMenu from "../../Context Menu/ContextMenu";
import Styles from "./users.module.css";
import { contextContextMenu } from "../../../Context";
import { handelContextMenu } from "../../../global";
import React from "react";
export default function UsersSection({ apiUsersResult }) {
  const { setPosition, setVisible, setContextPath, setContextID } =
    React.useContext(contextContextMenu);

  function handelNewUser(e) {
    e.preventDefault();
  }

  const handelSingle = (e, id) => {
    handelContextMenu(e, id, setPosition, setVisible, setContextID);
    setContextPath("users");
  };

  return (
    <section className={Styles.customersSection}>
      <ContextMenu />
      <div className={Styles.newUser}>
        <form>
          <input type="text" placeholder="Name..." />
          <input type="text" placeholder="User Name..." />
          <input type="text" placeholder="Password..." />
          <select>
            <option defaultValue disabled>
              Level
            </option>
            <option value="volvo">Admin</option>
            <option value="saab">Moderator</option>
            <option value="mercedes">User</option>
          </select>
          <input type="submit" value={"Add"} onClick={handelNewUser} />
          <input type="reset" value={"reset"} />
        </form>
      </div>
      <div className={Styles.currentUsers}>
        {apiUsersResult.map((user) => (
          <span
            key={`User-key-${user.id}`}
            onClick={(event) => handelSingle(event, user.id)}
            className={Styles.userBox}
          >
            {user.firstName} {user.lastName}
          </span>
        ))}
      </div>
    </section>
  );
}
