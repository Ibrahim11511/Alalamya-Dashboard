/* eslint-disable react/prop-types */
import Styles from "./users.module.css";

export default function UsersSection({ apiUsersResult }) {
  function handelNewUser(e) {
    e.preventDefault();
  }

  return (
    <section className={Styles.customersSection}>
      <div className={Styles.newUser}>
        <form>
          <input type="text" placeholder="Name..." />
          <input type="text" placeholder="User Name..." />
          <input type="text" placeholder="Password..." />
          <select>
            <option selected disabled>
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
          <span key={`User-key-${user.id}`} className={Styles.userBox}>
            {user.firstName} {user.lastName}
          </span>
        ))}
      </div>
    </section>
  );
}
