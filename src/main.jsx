import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import App from "./App.jsx";
// start fonts
import "@fontsource/ibm-plex-sans-condensed";
import "@fontsource/inika";
import "@fontsource-variable/noto-serif-gujarati";
import "@fontsource/lato";
// Supports weights 100-900
import '@fontsource-variable/inter';
import '@fontsource/hind-vadodara/300.css';
import '@fontsource/hind-vadodara/400.css';
import '@fontsource/hind-vadodara/500.css';
import '@fontsource/hind-vadodara/600.css';
import '@fontsource/hind-vadodara/700.css';
import '@fontsource/cabin-condensed';
import { Provider } from "react-redux";
import store from "./Store/store";
// end fonts

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
