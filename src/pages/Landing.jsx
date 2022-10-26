import Belt from "../components/Belt";
import LandingFooter from "../components/Landing-Footer";
import Welcome from "../components/WelcomeMessage";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Landing() {
  return (
    <section className="langing-page">
      <Navbar />
      <header className="landing__header">
        <Welcome />
        <Outlet />
      </header>
      <Belt />
      <LandingFooter />
    </section>
  );
}
export default Landing;
