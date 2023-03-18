// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Outlet,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// // importing all components

// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import About from "./Components/About";
// import Projects from "./Components/Projects";
// import Skills from "./Components/Skills";
// import Contact from "./Components/Contact";

// const RootLayout = () => {
//   return (
//     <>
//       <Header />

//       <div>
//         <Outlet />
//       </div>
//     </>
//   );
// };
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/react-profile/" element={<RootLayout />}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="projects" element={<Projects />} />
//       <Route path="skills" element={<Skills />} />
//       <Route path="contact" element={<Contact />} />
//     </Route>
//   )
// );

// const App = () => {
//   return <RouterProvider router={router} />;
// };

import { Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";

const App = () => {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />}>
    //     <Route path="/about" element={<About />} />
    //     <Route path="/Projects" element={<Projects />} />
    //     <Route path="/skills" element={<Skills />} />
    //     <Route path="/Contact" element={<Contact />} />
    //   </Route>
    // </Routes>

    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/react-profile">
        <Home />
      </Route>
      <Route exact path="react-profile/about">
        <About />
      </Route>
      <Route exact path="react-profile/projects">
        <Projects />
      </Route>
      <Route exact path="react-profile/skills">
        <Skills />
      </Route>
      <Route exact path="react-profile/contact">
        <Contact />
      </Route>
    </Switch>
  );
};

export default App;
