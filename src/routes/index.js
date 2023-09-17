import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "../layouts/dashboard";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";
// import GeneralApp from "../modules/dashboard/GeneralApp";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
      ],
    },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../modules/dashboard/GeneralApp"))
);
