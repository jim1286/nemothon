import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import store from "@/flux/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router.tsx";
import "./App.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </Provider>
);
