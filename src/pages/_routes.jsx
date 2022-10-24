import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";
import Solutions from "./Solutions";
import Useraccount from "./Useraccount";
import Userprofile from "./Userprofile";

const Routing = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="questions" element={<Home />} />
    <Route path="solution" element={<Solutions />} />
    <Route path="profile" element={<Userprofile />} />
    <Route path="myaccount" element={<Useraccount />} />
  </Routes>
);
export default Routing;
