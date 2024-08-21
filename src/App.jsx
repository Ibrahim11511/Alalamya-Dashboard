import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "@fontsource/roboto";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Pages/DashBoard/DashBoard";
import System from "./Pages/System Page/System";
import CustomerPage from "./Pages/Customers Page/CustomerPage";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "companies",
          element: <Dashboard />,
        },
        {
          path: "customers",
          element: <CustomerPage />,
        },
        {
          path: "system",
          element: <System />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
