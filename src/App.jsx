//import { useState } from "react";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/constact";
import Pictures from "./components/Pictures";
const router = createBrowserRouter([
  { path: "/", element: <Navbar /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/pictures", element: <Pictures /> },
]);

function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          backgroundColor: "#3286d4",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
