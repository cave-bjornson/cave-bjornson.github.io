import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import "react-responsive-modal/styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>
  // </React.StrictMode>
);
