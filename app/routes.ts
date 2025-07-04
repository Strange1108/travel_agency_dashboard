
import {type RouteConfig, route, layout, index} from "@react-router/dev/routes";

export default [
    route('sign-in', 'routes/root/sign-in.tsx'),
    route('api/create-trip', 'routes/api/create-trip.ts'),
    layout("routes/admin/AdminLayout.tsx", [
        route('Dashboard', 'routes/admin/Dashboard.tsx'),
        route('AllUsers', 'routes/admin/AllUsers.tsx'),
        route('trips', 'routes/admin/Trips.tsx'),
        route('trips/create', 'routes/admin/CreateTrip.tsx'),
        route('trips/:tripId', 'routes/admin/TripDetail.tsx'),  
    ]),
    layout('routes/root/page-layout.tsx', [
        index('routes/root/travel-page.tsx')
    ])
] satisfies RouteConfig;
