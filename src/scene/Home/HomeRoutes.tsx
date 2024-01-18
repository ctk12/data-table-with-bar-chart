import { nestedRoutesType } from "@/config/RouteConfig";
import Home from "./Home";

const HomeRoutes: nestedRoutesType = {
  path: "/",
  component: <Home />,
  routes: [],
};

export default HomeRoutes;
