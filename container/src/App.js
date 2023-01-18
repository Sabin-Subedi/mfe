import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { createGenerateClassName, StylesProvider } from "@material-ui/styles";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:
//   }
// ])

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

// This is the container app, which is the main app that will be rendered in the browser
function App() {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
