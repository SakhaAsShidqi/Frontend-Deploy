// Import React
import React from "react";
// Import Route dan Routes dari react-router-dom
import { Route, Routes } from "react-router-dom";
// Import komponen yang akan dirender
import Home from "./page/home";


function App() {
  return (
    <>
      {/* Membuat Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
