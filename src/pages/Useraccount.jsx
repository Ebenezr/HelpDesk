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
import { updateUser, reset } from "../features/users/userSlice";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

function Useraccount() {
  const [status, setStatus] = useState(null);
  const dispatch = useDispatch();
  const { isLoading, user, isSuccess, isError, authenticated } = useSelector(
    (store) => store.user
  );

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    //if user isnt loged in redirect to login page
    !authenticated ? navigate("/") : null;
  }, [user]);

  //get loggedin user info
  const getUserData = () => {
    setFormData({
      first_name: user?.first_name,
      last_name: user?.last_name,
      username: user?.username,
      email: user?.email,
    });
  };
  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  //handle submision
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const originalPromiseResults = await dispatch(
        updateUser({ id: user?.id, formData: formData })
      )
        .unwrap()
        .then((data) => {
          setStatus(true);
          //navigate to homepage on success
        })
        .catch((err) => {
          setStatus(false);
        });
      return originalPromiseResults;
    } catch (err) {
    } finally {
      //reset store states
      setTimeout(() => {
        setStatus(null);
        dispatch(reset());
      }, 1000);
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
          <NavLink className="side__nav__links" to="/">
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
                {user?.first_name?.slice(0, 1)}
                {user?.last_name?.slice(0, 1)}
              </AvatarFallbackLg>
            </AvatarLg>
            <span>
              <h3>{user?.username}</h3>
              <small>
                <MdEmail /> {user?.email}
              </small>
            </span>
            <button className="btn sec-btn" onClick={getUserData}>
              Edit profile
            </button>
          </div>
          <article className="user-articles">
            <form className="form-wrapper" onSubmit={handleSubmit}>
              <div className="edit-profile">
                <span className="input_group">
                  <Label htmlFor="image" css={{ lineHeight: "35px" }}>
                    Profile image
                  </Label>
                  <AvatarLg>
                    <AvatarImage src=" " alt="Avatar" />
                    {/* if image isnt available revert to user initials */}
                    <AvatarFallbackLg>
                      {user?.first_name?.slice(0, 1)}
                      {user?.last_name?.slice(0, 1)}
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
                    placeholder={user?.username}
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
                    placeholder={user?.email}
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
                    placeholder={user?.first_name}
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
                    placeholder={user?.last_name}
                    value={formData?.last_name}
                    onChange={handleChange}
                  ></input>
                </span>
                {isSuccess === true && status ? (
                  <div className="form__status active">Update Success</div>
                ) : isError && status === false ? (
                  <div className="form__status">
                    Failed to update user infomation, Check missing details!
                  </div>
                ) : null}
              </div>
              <LoadingButton
                style={{
                  backgroundColor: "#feebe4",
                  color: "#f48225",
                  borderColor: "#f48225",
                }}
                size="large"
                type="submit"
                //onClick={handleClick}
                loadingPosition="start"
                startIcon={<SaveIcon />}
                loading={isLoading}
                variant="outlined"
              >
                Save updates
              </LoadingButton>
              {/* <button type="submit" className="btn sec-btn">
                {isLoading ? "Saving..." : "Save"}
              </button> */}
            </form>
          </article>
        </main>
      </section>
      <Footer_main />
    </>
  );
}

export default Useraccount;
