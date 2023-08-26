import App from "@/App";
import { Error, MainWrap } from "@/components";
import MapPage from "@/pages/MapPage/MapPage";
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
        ],
      },
    ],
  },
]);

export default Router;
