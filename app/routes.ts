
import {type RouteConfig, route, layout} from "@react-router/dev/routes";

export default [
    layout("routes/admin/AdminLayout.tsx", [
        route('Dashboard', 'routes/admin/Dashboard.tsx'),
        route('AllUsers', 'routes/admin/AllUsers.tsx')
    ]),
] satisfies RouteConfig;
