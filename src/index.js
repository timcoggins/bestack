import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ScoreListContextProvider } from "./contexts/ScoreContext";

ReactDOM.render(
  <React.StrictMode>
    <ScoreListContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ScoreListContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
