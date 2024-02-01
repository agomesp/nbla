import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import ErrorBoundary from "../components/ErrorBoundary";
import Home from "./Home";
import TableMap from "./TableMap";
import SignInCallback from "../components/SignInCallback";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/table-mapping",
        element: <TableMap />,
      }
    ]
  },
  {
    path: "/signin-callback",
    element: <SignInCallback />,
  },
  {
    path: "/_health",
    element: <p>healthy</p>,
  },
]);

export default router;