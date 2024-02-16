import React from "react";

// react-router-dom
import { Navigate, Outlet } from "react-router-dom";

// styles
import "./style.css";

// components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      {/* Header */}
      <Navbar />
      {/* Main */}
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;