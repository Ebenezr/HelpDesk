import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import {
  AvatarFallbackLg,
  AvatarImage,
  AvatarLg,
} from "../components/radixUI/avatar";
import { MdEmail, MdAccountCircle, MdHome } from "react-icons/md";
import { Label } from "../components/radixUI/Label";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateUser } from "../features/users/userSlice";

function Useraccount() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
  const [acc, setAcc] = useState({});
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const auth = JSON.parse(localStorage.getItem("authenticated") || "");
    setAcc(loggedUser);
    setFormData(acc);
    //if user isnt loged in redirect to login page
    !auth ? navigate("/") : null;
  }, []);

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  //handle submision
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(updateUser(acc?.id, formData)).unwrap();
    } catch (err) {
      console.log("Failed to post", err);
    } finally {
    }
  };
  return (
    <>
      <Searchbar />
      <section className="main-section">
        {/* side bar */}
        <aside className="aside">
          <NavLink className="side__nav__links" to="/questions">
            <BsFillPatchQuestionFill className="link__icons" />
            <h3>Questions</h3>
          </NavLink>
          <NavLink
            className="side__nav__links"
            activeclassname="active"
            to="/ask"
          >
            <HiLightBulb className="link__icons" />
            <h3>Ask</h3>
          </NavLink>
          <NavLink className="side__nav__links" to="/profile">
            <MdAccountCircle className="link__icons" />
            <h3>Profile</h3>
          </NavLink>
          <NavLink className="side__nav__links" to="/home">
            <MdHome className="link__icons" />
            <h3>Home</h3>
          </NavLink>
        </aside>
        {/* main content area  */}
        <main className="main-section-content">
          <div className="user-account">
            <AvatarLg>
              <AvatarImage src=" " alt="Avatar" />
              {/* if image isnt available revert to user initials */}
              <AvatarFallbackLg>
                {acc?.first_name?.slice(0, 1)}
                {acc?.last_name?.slice(0, 1)}
              </AvatarFallbackLg>
            </AvatarLg>
            <span>
              <h3>{acc?.username}</h3>
              <small>
                <MdEmail /> {acc?.email}
              </small>
            </span>
            <button className="btn sec-btn">Edit profile</button>
          </div>
          <article className="user-articles">
            <form className="edit-profile" onSubmit={handleSubmit}>
              <span className="input_group">
                <Label htmlFor="image" css={{ lineHeight: "35px" }}>
                  Profile image
                </Label>
                <AvatarLg>
                  <AvatarImage src=" " alt="Avatar" />
                  {/* if image isnt available revert to user initials */}
                  <AvatarFallbackLg>
                    {acc?.first_name?.slice(0, 1)}
                    {acc?.last_name?.slice(0, 1)}
                  </AvatarFallbackLg>
                </AvatarLg>
              </span>
              <span className="input_group">
                <Label htmlFor="email" css={{ lineHeight: "35px" }}>
                  User Name
                </Label>
                <input
                  type="text"
                  id="username"
                  className="inputs"
                  placeholder="Doe"
                  value={formData?.username}
                  onChange={handleChange}
                ></input>
              </span>
              <span className="input_group">
                <Label htmlFor="email" css={{ lineHeight: "35px" }}>
                  Email
                </Label>
                <input
                  type="email"
                  id="email"
                  className="inputs"
                  placeholder="name@student.moringaschool.com"
                  value={formData?.email}
                  onChange={handleChange}
                ></input>
              </span>
              <span className="input_group">
                <Label htmlFor="full_name" css={{ lineHeight: "35px" }}>
                  First Name
                </Label>
                <input
                  type="text"
                  id="first_name"
                  className="inputs"
                  placeholder="Jon Doe"
                  value={formData?.first_name}
                  onChange={handleChange}
                ></input>
              </span>
              <span className="input_group">
                <Label htmlFor="user_name" css={{ lineHeight: "35px" }}>
                  Last Name
                </Label>
                <input
                  type="text"
                  id="last_name"
                  className="inputs"
                  placeholder="Jon Doe"
                  value={formData?.last_name}
                  onChange={handleChange}
                ></input>
              </span>
              <span className="input_group">
                <Label htmlFor="password" css={{ lineHeight: "35px" }}>
                  Password
                </Label>
                <input
                  type="text"
                  id="password"
                  className="inputs"
                  placeholder="*******"
                  value={formData?.password}
                  onChange={handleChange}
                ></input>
              </span>
              <span className="input_group">
                <Label htmlFor="cornfirm_password" css={{ lineHeight: "35px" }}>
                  Confirm Password
                </Label>
                <input
                  type="text"
                  id="confirm_password"
                  className="inputs"
                  placeholder="*******"
                  value={formData?.confirm_password}
                  onChange={handleChange}
                ></input>
              </span>
              <button type="submit">Submit</button>
            </form>
          </article>
        </main>
      </section>
      <Footer_main />
    </>
  );
}

export default Useraccount;
