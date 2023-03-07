// Importing BrowserRouter, Link, Routes from react-router-dom

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// importing all components

import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="Projects" element={<Projects />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
