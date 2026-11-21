import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/MainLayout.tsx", [
    index("./routes/home.tsx"),
    route("about", "./routes/about.tsx"),
    route("our-apps", "./routes/ourApps.tsx"),
    route("contact", "./routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
