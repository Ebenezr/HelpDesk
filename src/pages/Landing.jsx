import Belt from "../components/Belt";
import LandingFooter from "../components/Landing-Footer";
import Register from "../components/Forms/Registry";
import Welcome from "../components/WelcomeMessage";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Login from "../components/Forms/Login";

function Landing() {
  return (
    <section className="langing-page">
      <Navbar />
      <header className="landing__header">
        <Welcome />
        <Login />
      </header>
      <Belt />
      <LandingFooter />
    </section>
  );
}
export default Landing;
