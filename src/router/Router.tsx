import App from "@/App";
import { Error, MainWrap } from "@/components";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainWrap />,
      },
    ],
  },
]);

export default Router;
