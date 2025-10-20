import {
    type RouteConfig,
    index,
    route,
    layout,
} from "@react-router/dev/routes";

export default [
    index("routes/IndexRedirect.tsx"),
    layout("routes/HomeBase.tsx", [
        route("browse/*", "routes/Browse.tsx", [
            route("victoria", "routes/networks/Victoria.tsx"),
        ]),
        route("compare/*", "routes/Comparison.tsx"),
        route("explore/:currentStation", "routes/Explore.tsx"),
        route("about", "routes/About.tsx"),
    ]),
] satisfies RouteConfig;
