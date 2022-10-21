import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Solutions from "./Solutions";
import Userprofile from "./Userprofile";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="questions" element={<Home />} />
    <Route path="solution" element={<Solutions />} />
    <Route path="profile" element={<Userprofile />} />
  </Routes>
);
export default Routing;
