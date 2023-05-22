import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <CssBaseline />
    <GlobalStyles
      styles={{
        body: { backgroundColor: "#fefefe", color: "#222" },
        a: { textDecoration: "none", color: "inherit" },
      }}
    />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
