import { BsFillBookmarkFill } from "react-icons/bs";
import { MdNotifications } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "../radixUI/avatar";

function Searchbar() {
  return (
    <nav className="searchbar">
      <NavLink to="landing" className="logo">
        HELP<span>DESK</span>
      </NavLink>

      <input type="search" className="search-input" placeholder="Search..." />

      <NavLink to="profile">
        {/* image component */}
        <Avatar className="avatar">
          <AvatarImage src=" " alt="Avatar" />
          {/* if image isnt available revert to user initials */}
          <AvatarFallback>EB</AvatarFallback>
        </Avatar>
      </NavLink>
      <NavLink to="profile">
        <BsFillBookmarkFill className="nav__icons" />
      </NavLink>
      <NavLink to="profile">
        <MdNotifications className="nav__icons" />
      </NavLink>
    </nav>
  );
}

export default Searchbar;
