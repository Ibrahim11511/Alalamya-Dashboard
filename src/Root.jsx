import { Outlet } from "react-router";
import NavBar from "./Components/NavBar/NavBar";

export default function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}
