import Belt from "../components/Belt";
import LandingFooter from "../components/Landing-Footer";
import Register from "../components/Registry";
import Welcome from "../components/WelcomeMessage";
import React from "react";
import Navbar from "../components/Navbar/Navbar";

const styles = {
  Landing: {
    backgroundColor: "#f1f2f3",
    heght: "1100px",
  },
};

function Landing() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Register />
      <Belt />
      <LandingFooter />
      {/* <Footer /> */}
    </div>
  );
}
export default Landing;
