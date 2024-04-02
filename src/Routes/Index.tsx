import { RouteObject } from "react-router";
import Layout from "../layout/Index";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [{ children: [{ path: "", element: <Home /> }] }],
  },
];

export default routes;
