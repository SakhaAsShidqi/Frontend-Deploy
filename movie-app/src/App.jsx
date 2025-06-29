import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Creates from "./page/Create"; 
import Popular from "./page/Popular";
import NowPlaying from "./page/NowPlaying";
import TopRated from "./page/TopRated";
import Layout from "./Layout/index";
import Counter from "./components/Counter/Counter.jsx";
import { ThemeProvider } from "styled-components";
import Theme from "./utils/constants/theme.jsx"; 

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/create" element={<Creates />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;