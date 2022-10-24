import Belt from "../components/Belt";
import LandingFooter from "../components/Landing-Footer";
import Register from "../components/Registry";
import Welcome from "../components/WelcomeMessage";

function Landing() {
  return (
    <div>
      <Welcome />
      <Register/>
      <Belt />
      <LandingFooter />
    </div>
  );
}

export default Landing;
