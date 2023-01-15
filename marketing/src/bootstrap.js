import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(<App />);
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFINITELY has an element with an id of 'marketing-dev-root'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#marketing-dev-root");

  // Assuming our container doesn't have an element
  // with id 'marketing-dev-root'...
  if (el) {
    // We are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'marketing-dev-root' exists
// WE DO NOT WANT to try to immediately render the app
export { mount };
