/* eslint-disable react/prop-types */
import Styles from "./users.module.css";
import { contextContextMenu } from "../../../Context";
import { handelContextMenu } from "../../../global";
import React from "react";
export default function UsersSection({
  apiUsersResult,
  newUserInput,
  setNewUserInput,
}) {
  const { setPosition, setVisible, setContextPath, setContextID } =
    React.useContext(contextContextMenu);

  const requestHeaders = { "Content-Type": "application/json" };
  const postAnewUser = () => {
    if (newUserInput.name) {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: requestHeaders,
        body: JSON.stringify(newUserInput),
      });
    }
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
            value={newUserInput.name}
            onChange={(e) =>
              setNewUserInput((prev) => ({ ...prev, name: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="User Name..."
            onChange={(e) =>
              setNewUserInput((prev) => ({
                ...prev,
                userName: e.target.value,
              }))
            }
          />
          <input
            type="text"
            placeholder="Password..."
            onChange={(e) =>
              setNewUserInput((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <select
            onChange={(e) =>
              setNewUserInput((prev) => ({ ...prev, role: e.target.value }))
            }
          >
            <option disabled>Level</option>
            <option value="admin">Admin</option>
            <option value="moderator">Moderator</option>
            <option value="user">User</option>
          </select>
          <input type="submit" value={"Add"} onClick={postAnewUser} />
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
            {user.name}
          </span>
        ))}
      </div>
    </section>
  );
}
