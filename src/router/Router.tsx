import App from "@/App";
import { Error, MainWrap } from "@/components";
import { MapPage, RangeMoneyPage, RoutePage, SuggestPage } from "@/pages";
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
            element: <RangeMoneyPage />,
          },
          {
            path: "/map",
            element: <MapPage />,
          },
          {
            path: "/suggest",
            element: <SuggestPage />,
          },
          {
            path: "/id",
            element: <RoutePage />,
          },
        ],
      },
    ],
  },
]);

export default Router;
