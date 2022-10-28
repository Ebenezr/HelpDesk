import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useNavigationType } from "react-router-dom";

const styles = {
  span: {
    width: "100%",
    height: "100%",
    color: "#f48225",
  },
  wrapper: {
    display: "flex",
    position: "relative",
    margin: "10px",
    padding: "20px",
    justifyContent: "end",
    alignItems: "center",
    boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
    borderBottom: "1px solid #aba8a8",
  },

  items: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
    fontWeight: "medium",
    lineHeight: 1.5,
    padding: "20px",
    flexWrap: "nowrap",
    color: "#7a7878",

    textDecoration: "none",
  },
  header: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "medium",
    fontWeight: "bold",
    //padding: "900px",
  },
  button: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "medium",
    fontWeight: "0",
    width: "10%",
    backgroundColor: "#f48225",
    borderRadius: "7px",
    color: "#f1f2f3",
    border: "none",
    padding: "3px 12px",
    textDecoration: "none",
  },
};

function Navbar() {
  const [authenticated, setAuth] = useState(null);
  const [acc, setAcc] = useState({});
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("authenticated") || "");
    const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
    setAcc(loggedUser);
    setAuth(auth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <div>
        <a className="logo">
          HELP<span>DESK</span>
        </a>
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
          FAQS
        </NavLink>
      </div>

      <button style={styles.button} onClick={() => navigate("login")}>
        {authenticated ? "Log out" : "Log in"}
      </button>
    </nav>
  );
}

export default Navbar;
