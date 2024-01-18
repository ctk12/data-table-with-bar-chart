import MasterRoutes from "@/MasterRoutes";
import PageNotFound from "@/scene/Common/PageNotFound";
import { ReactNode } from "react";

export type routesType = {
    path: string,
    component: ReactNode,
};

export type nestedRoutesType = {
    path: string,
    component: ReactNode,
    routes: routesType[],
};

const resolveNestedRoutes = (nestedRoutes: nestedRoutesType): routesType[] => {
    const parentRoute = {path: nestedRoutes.path, component: nestedRoutes.component};
    return nestedRoutes.routes.reduce((allRoutes, currentRoute) => {
        return [...allRoutes, { ...currentRoute, path: `${parentRoute.path}${currentRoute.path}` }];
    }, [parentRoute]);
}

const routeConfig = MasterRoutes.map((route: nestedRoutesType) => resolveNestedRoutes(route))
  .reduce((acc, arr) => [...acc, ...arr], []);

routeConfig.push({
    path: "*",
    component: <PageNotFound />,
});

export default routeConfig;