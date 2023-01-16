import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Album />,
  },
  {
    path: "pricing",
    element: <Pricing />,
  },
]);

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <RouterProvider router={router} />
    </StylesProvider>
  );
}

export default App;
