import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";

// importing all components

import Header from "./Components/Header";
// import Nav from "./Components/Nav";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

const Root = () => {
  return (
    <>
      <Header />

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
