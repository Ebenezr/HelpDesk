import Belt from "../components/Belt";
import LandingFooter from "../components/Landing-Footer";
import Register from "../components/Registry";
import Welcome from "../components/WelcomeMessage";
import React from "react";
import Navbar from "../components/Navbar/Navbar";

// const styles = {
//   Landing: {
//     backgroundColor: "#f1f2f3",
//     heght: "1100px",
//   },
// };

function Landing() {
  return (
    <section className="langing-page">
      <Navbar />
      <header className="landing__header">
        <Welcome />
        <Register />
      </header>

      <Belt />
      <LandingFooter />
      {/* <Footer /> */}
    </section>
  );
}
export default Landing;
