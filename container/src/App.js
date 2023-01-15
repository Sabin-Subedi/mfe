import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element:
//   }
// ])

// This is the container app, which is the main app that will be rendered in the browser
function App() {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />;
    </BrowserRouter>
  );
}

export default App;
