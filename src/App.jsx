import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './Pages/Hero'
import Programs from './Pages/Programs'
import Choose from './Pages/Choose'
import Journey from './Pages/Journey'
import AboutUs from './Pages/AboutUs'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Hero/>
    <Programs/>
    <Choose/>
    <Journey/>
    <AboutUs/>
    </>
  );
}

export default App;
