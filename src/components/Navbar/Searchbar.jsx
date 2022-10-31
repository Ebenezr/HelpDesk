import { useEffect, useMemo, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../radixUI/avatar";
import { logOut } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";
import { searchQuestions } from "../../features/questions/questionSlice";
import debounce from "lodash.debounce";
import DropdownMenuDemo from "./DropDown";

function Searchbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [acc, setAcc] = useState({});
  const [authenticated, setAuth] = useState({});
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("authenticated") || "" ||false);
    const loggedUser = JSON.parse(
      localStorage.getItem("user") || "{}" || undefined || null
    );
    setAcc(loggedUser);
    setAuth(auth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(acc);

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
            {acc?.first_name?.slice(0, 1)}
            {acc?.last_name?.slice(0, 1)}
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
