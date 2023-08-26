import App from "@/App";
import { Error, MainWrap } from "@/components";
import { MapPage, RangeMoneyPage, RoutePage } from "@/pages";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <MainWrap />,
        children: [
          {
            path: "",
            element: <MapPage />,
          },
          {
            path: "/range",
            element: <RangeMoneyPage />,
          },
          {
            path: "/route",
            element: <RoutePage />,
          },
        ],
      },
    ],
  },
]);

export default Router;
