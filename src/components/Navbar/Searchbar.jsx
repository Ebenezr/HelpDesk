import { useEffect, useMemo, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdMenu, MdNotifications } from "react-icons/md";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../radixUI/avatar";
import { logOut } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { searchQuestions } from "../../features/questions/questionSlice";
import debounce from "lodash.debounce";
import DropdownMenu from "./DropDown";

function Searchbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [openmenu, setOpenmenu] = useState(null);

  const { isLoading, user, authenticated } = useSelector((store) => store.user);

  //search questions
  const handleSearch = (event) => {
    dispatch(searchQuestions(event.target.value));
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleSearch, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return (
    <nav className="searchbar">
      <button className="mobile-menu" onClick={() => setOpenmenu(!openmenu)}>
        <MdMenu className="menu" />
      </button>
      {openmenu ? (
        <div
          className="sm-nav"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
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
          <p className="nav-link" onClick={() => setOpenmenu(!openmenu)}>
            Close Menu
          </p>
        </div>
      ) : null}
      <NavLink to="/" className="logo">
        HELP<span>DESK</span>
      </NavLink>

      <input
        type="search"
        className="search-input"
        placeholder="Search..."
        onChange={debouncedResults}
      />

      <NavLink to="profile">
        {/* image component */}
        <Avatar className="avatar">
          <AvatarImage src=" " alt="Avatar" />
          {/* if image isnt available revert to user initials */}
          <AvatarFallback>
            {!isLoading && user?.first_name?.slice(0, 1)}
            {!isLoading && user?.last_name?.slice(0, 1)}
          </AvatarFallback>
        </Avatar>
      </NavLink>

      <NavLink to="profile">
        <MdNotifications className="nav__icons" />
      </NavLink>
      <button
        className=" btn log-out-btn"
        onClick={() => {
          navigate("/home");
          dispatch(logOut());
        }}
      >
        {authenticated ? "Log out" : "Log in"}
      </button>
    </nav>
  );
}

export default Searchbar;
