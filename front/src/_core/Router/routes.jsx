import { lazy } from "react";
// import { replaceAll } from "src/_common/service/FunUtil";

const Tout = lazy(() => import("_business/Tout/Tout"));
const LesHauts = lazy(() => import("_business/LesHauts/LesHauts"));

const filterMenu = (name) => {
  const routesWithMenu = [...routes.filter((r) => r[name])];
  routesWithMenu.sort((a, b) => (a[name] && b[name] && a[name]?.position - b[name]?.position) || 0);
  return routesWithMenu;
};

// export const resolvePath = (path, variables /*: Dictionary*/) => {
//   if (path.indexOf(":") > -1) {
//     Object.keys(variables).forEach((key) => {
//       path = replaceAll(path, ":" + key, variables[key]);
//     });
//   }
//   return path;
// };

export const ROUTE_TOUT = "/tout";
export const ROUTE_LES_HAUTS = "/les-hauts";


const routes = [
  {
    path: ROUTE_TOUT,
    key: "tout",
    component: Tout,
    secured: true,
    exact: true
  },
  {
    path: ROUTE_LES_HAUTS,
    key: "les-hauts",
    component: LesHauts,
    secured: true,
    exact: true,
  },
];

export const routesWithMenu = filterMenu("menu");
export const routesForMobileMenu = filterMenu("menuMobile");
export const routesWithMobileBurgerMenu = filterMenu("menuBurgerMobile");
export const routesWithElementsJuridiques = filterMenu("elementsJuridiques");
export default routes;
