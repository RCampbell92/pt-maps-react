import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/IndexRedirect.tsx"),
  route("home", "routes/HomeBase.tsx", [
    route("compare/*", "routes/Comparison.tsx"),
    route("explore", "routes/Explore.tsx"),
  ]),
] satisfies RouteConfig;
