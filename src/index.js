import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CacheBuster from "react-cache-buster";
import { version } from "../package.json";
import reportWebVitals from "./reportWebVitals";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LoadingProvider } from "./contexts/LoadingContext";
import { setupHotjar } from "./helpers/utils";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <HelmetProvider>
          <CacheBuster
            currentVersion={version}
            isEnabled={true} //If false, the library is disabled.
            isVerboseMode={false} //If true, the library writes verbose logs to console.
          >
            <App />
          </CacheBuster>
        </HelmetProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
setupHotjar();
