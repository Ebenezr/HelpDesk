import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const { authenticated } = useSelector((store) => store.user);

  const navigate = useNavigate();
  return (
    <nav className="nav-bar-wrapper mobile-nav-disp">
      <div className="nav-bar">
        <NavLink to="/home" className="logo">
          HELP<span>DESK</span>
        </NavLink>
        <div className="nav__links_wrapper">
          <NavLink to="/questions" className="nav-link">
            HOME
          </NavLink>
          <NavLink to="/ask" className="nav-link">
            ASK
          </NavLink>
          <NavLink to="/questions" className="nav-link">
            QUESTIONS
          </NavLink>
          <NavLink to="/profile" className="nav-link">
            PROFILE
          </NavLink>
        </div>

        <button
          onClick={() => navigate("login")}
          className="nav__bar_btn btn ter-btn"
        >
          {authenticated ? "Log out" : "Log in"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
