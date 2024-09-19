import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import HomeForm from "./HomeForm";

const App = () => {
  const [mode, setMode] = useState(false);
  const changeMode = () => {
    setMode(!mode);
  };
  return (
    <div className={`w-screen h-screen ${mode ? "bg-black" : " bg-white"}`}>
      <Nav handleMode={changeMode} />
      <div className="h-5/6  items-center flex justify-center ">
        {/* <Edu/> */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
