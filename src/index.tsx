import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, GlobalStyles } from "@mui/material";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CssBaseline />
    <GlobalStyles styles={{ body: { backgroundColor: "#fefefe" } }} />
    <App />
  </BrowserRouter>
);
