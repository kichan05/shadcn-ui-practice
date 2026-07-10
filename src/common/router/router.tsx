import {routeConfig} from "./RouteConfig";
import {createBrowserRouter} from "react-router-dom";
import App from "../../App";

const childrenRoutes = Object.values(routeConfig).map((route) => ({
    path: route.path,
    element: <route.Component/>,
}));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: childrenRoutes,
    },
]);
