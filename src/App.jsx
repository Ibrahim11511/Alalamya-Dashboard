import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "@fontsource/roboto";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Dashboard from "./Pages/DashBoard/DashBoard";
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
