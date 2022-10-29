import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { NavLink, useNavigate } from "react-router-dom";
import {
  AvatarFallbackLg,
  AvatarImage,
  AvatarLg,
} from "../components/radixUI/avatar";
import { MdEmail, MdAccountCircle, MdHome } from "react-icons/md";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserBookmarks,
  getUserQuestions,
  getUserSolutions,
  getUserTags,
} from "../features/users/userSlice";
import moment from "moment";

function Userprofile() {
  const dispatch = useDispatch();
  const { isLoading, bookmarks, solutions, questions, tags, user } =
    useSelector((store) => store.user);
  const [acc, setAcc] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    //fetch logedin user's info
    dispatch(getUserBookmarks());
    dispatch(getUserSolutions());
    dispatch(getUserQuestions());
    dispatch(getUserTags());
    const loggedUser = JSON.parse(localStorage.getItem("user") || "{}");
    const auth = JSON.parse(localStorage.getItem("authenticated") || "");
    setAcc(loggedUser);
    //if user isnt loged in redirect to login page
    !auth ? navigate("/") : null;
  }, [user]);

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
            <button
              className="btn sec-btn"
              onClick={() => navigate("/myaccount")}
            >
              Edit profile
            </button>
          </div>
          <article className="user-articles">
            <div className="user-status-wrapper">
              <p>
                My Questions <span>{questions.length}</span>
              </p>
              <div className="span-card">
                {questions?.map((quiz) => (
                  <span className="bullets-wrapper" key={quiz?.id}>
                    <span className="text-btn">
                      <button className="info-btn">{quiz?.votes}</button>

                      <small
                        onClick={() => {
                          localStorage.setItem("quiz", JSON.stringify(quiz));
                          navigate("/solutions");
                        }}
                      >
                        {quiz?.title}
                      </small>
                    </span>
                    <p>
                      {moment(Date.parse(quiz?.created_at)).format(
                        "MMMM Do, YYYY"
                      )}
                    </p>
                  </span>
                ))}
              </div>
            </div>
            <div className="user-status-wrapper">
              <p>
                My Answers <span>{solutions.length}</span>
              </p>
              <div className="span-card">
                {solutions?.map((quiz) => (
                  <span className="bullets-wrapper" key={quiz?.id}>
                    <span className="text-btn">
                      <button className="info-btn">{quiz?.votes}</button>

                      <small
                        onClick={() => {
                          localStorage.setItem("quiz", JSON.stringify(quiz));
                          navigate("/solutions");
                        }}
                      >
                        {quiz?.question?.title}
                      </small>
                    </span>
                    <p>
                      {moment(Date.parse(quiz?.question?.created_at)).format(
                        "MMMM Do, YYYY"
                      )}
                    </p>
                  </span>
                ))}
              </div>
            </div>
            <div className="user-status-wrapper">
              <p>
                My Booksmarks <span>{bookmarks.length}</span>
              </p>
              <div className="span-card">
                {bookmarks?.map((book) => (
                  <span className="bullets-wrapper" key={book?.id}>
                    <span className="text-btn">
                      <button className="info-btn">
                        {book?.question?.votes}
                      </button>
                      <small
                        onClick={() => {
                          localStorage.setItem(
                            "quiz",
                            JSON.stringify(book?.question)
                          );
                          navigate("/solutions");
                        }}
                      >
                        {book?.question?.title}
                      </small>
                    </span>
                    <p>
                      {moment(Date.parse(book?.question?.created_at)).format(
                        "MMMM Do, YYYY"
                      )}
                    </p>
                  </span>
                ))}
              </div>
            </div>
          </article>
        </main>
      </section>
      <Footer_main />
    </>
  );
}

export default Userprofile;
