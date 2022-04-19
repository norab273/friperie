import { lazy } from "react";
import { replaceAll } from "src/_common/service/FunUtil";

const Tout = lazy(() => import("_business/Tout/Tout"));
const LesHauts = lazy(() => import("_business/LesHauts/LesHauts"));

export const resolvePath = (path, variables /*: Dictionary*/) => {
  if (path.indexOf(":") > -1) {
    Object.keys(variables).forEach((key) => {
      path = replaceAll(path, ":" + key, variables[key]);
    });
  }
  return path;
};

export const ROUTE_PRODUCT = "/product/:id";


const routes = [
  {
    path: ROUTE_PRODUCT,
    key: "tout",
    component: Tout,
    secured: true,
    exact: true
  },
];

export default routes;
