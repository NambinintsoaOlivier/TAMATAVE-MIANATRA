import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Formations from "./pages/Formations";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="formations" element={<Formations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
