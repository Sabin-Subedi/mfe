import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Album from "./components/Landing";
import Pricing from "./components/Pricing";
import { StylesProvider } from "@material-ui/core";

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

function App() {
  return (
    <StylesProvider>
      <RouterProvider router={router} />
    </StylesProvider>
  );
}

export default App;
