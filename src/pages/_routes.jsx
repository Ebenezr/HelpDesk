import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Solutions from "./Solutions";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="home" element={<Home />} />
    <Route path="solutions" element={<Solutions />} />
  </Routes>
);
export default Routing;
