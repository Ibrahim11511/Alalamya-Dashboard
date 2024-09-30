// /* eslint-disable no-prototype-builtins */
/* eslint-disable react/prop-types */
import Styles from "./users.module.css";
import { contextContextMenu } from "../../../Context";
import {
  allValuesPresent,
  handelContextMenu,
  handelInputsGroupChange,
} from "../../../global";
import React from "react";
export default function UsersSection({
  apiUsersResult,
  newUserInput,
  setNewUserInput,
}) {
  const { setPosition, setVisible, setContextPath, setContextID } =
    React.useContext(contextContextMenu);

  const requestHeaders = { "Content-Type": "application/json" };
  const postAnewUser = (e) => {
    e.preventDefault();
    if (allValuesPresent(newUserInput)) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(newUserInput),
      })
        .then((res) => res.json())
        .then(console.log);
    }
    setNewUserInput({ name: "", userName: "", password: "", role: "" });
  };
  const handelSingle = (e, id) => {
    handelContextMenu(e, id, setPosition, setVisible, setContextID);
    setContextPath("users");
  };

  return (
    <section className={Styles.customersSection}>
      <div className={Styles.newUser}>
        <form>
          <input
            type="text"
            placeholder="Name..."
            name="name"
            value={newUserInput.name}
            onChange={(e) => handelInputsGroupChange(e, setNewUserInput)}
          />
          <input
            type="text"
            placeholder="User Name..."
            name="userName"
            value={newUserInput.userName}
            onChange={(e) => handelInputsGroupChange(e, setNewUserInput)}
          />
          <input
            type="text"
            placeholder="Password..."
            name="password"
            value={newUserInput.password}
            onChange={(e) => handelInputsGroupChange(e, setNewUserInput)}
          />
          <select
            onChange={(e) => handelInputsGroupChange(e, setNewUserInput)}
            value={newUserInput.role}
            name="role"
          >
            <option disabled>Level</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
          <input type="submit" value={"Add"} onClick={(e) => postAnewUser(e)} />
          <input
            type="reset"
            value={"reset"}
            onClick={() =>
              setNewUserInput({
                name: "",
                userName: "",
                password: "",
                role: "user",
              })
            }
          />
        </form>
      </div>
      <div className={Styles.currentUsers}>
        {apiUsersResult.map((user) => (
          <span
            key={`User-key-${user.id}`}
            onClick={(event) => handelSingle(event, user.id)}
            className={Styles.userBox}
          >
            {user.name}
          </span>
        ))}
      </div>
    </section>
  );
}
