import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import Page_1 from "./page_1";
import Page_2 from "./page_2";
import Page_3 from "./page_3";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <h1>Hey again!!!</h1>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          ></Route>
          <Route
            path="/page1"
            element={<Page_1 />}
          ></Route>
          <Route
            path="/page2"
            element={<Page_2 />}
          ></Route>
          <Route
            path="/page3"
            element={<Page_3 />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
