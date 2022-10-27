import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { MdAccountCircle, MdHome } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../features/questions/questionSlice";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);
import ReactTimeAgo from "react-time-ago";
import { motion } from "framer-motion";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";

function Home() {
  const navigate = useNavigate();
  const { isLoading, allquestions, total, total_pages } = useSelector(
    (store) => store.questions
  );
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions(page));
  }, [page, dispatch]);

  return (
    <>
      <Searchbar />
      <section className="main-section">
        {/* side bar */}
        <aside className="aside">
          <NavLink
            className="side__nav__links"
            to="/questions"
            activeclassname="active"
          >
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
          <NavLink
            className="side__nav__links"
            activeclassname="active"
            to="/profile"
          >
            <MdAccountCircle className="link__icons" />
            <h3>Profile</h3>
          </NavLink>
          <NavLink
            className="side__nav__links"
            activeclassname="active"
            to="/home"
          >
            <MdHome className="link__icons" />
            <h3>Home</h3>
          </NavLink>
        </aside>
        {/* main content area  */}
        <main className="main-section-content">
          <div className="section-header">
            <h3>All Questions</h3>
            <small>{total} questions</small>
          </div>
          {!isLoading ? (
            allquestions?.map((question) => (
              <div className="quiz-card" key={question?.id}>
                {/* question cards */}
                <div className="quiz-card-status">
                  <p>{question?.votes} votes</p>
                  <small>{question?.solutions?.length} answers</small>
                </div>
                <div className="question-title">
                  <p
                    onClick={() => {
                      localStorage.setItem("quiz", JSON.stringify(question));
                      navigate("/solutions");
                    }}
                  >
                    {question?.title}
                  </p>
                </div>
                <div className="labels-tags">
                  {question?.tags?.map((tag) => (
                    <small key={tag?.id}>{tag?.name}</small>
                  ))}
                </div>

                <div className="userinfo-card">
                  <p className="username">{question?.user?.username}</p>
                  <small className="timestamp">
                    asked
                    <ReactTimeAgo
                      className="time-ago"
                      date={Date.parse(question?.created_at)}
                      locale="en-US"
                    />
                  </small>
                </div>
              </div>
            ))
          ) : (
            <div>
              <h1>Loading...</h1>
            </div>
          )}
          <div className="pagination">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn"
              //isLoading={isFetching}
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1);
              }}
            >
              Previus
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="btn"
              onClick={() => {
                setPage(page + 1);
              }}
            >
              Next
            </motion.button>
          </div>
        </main>
        {/* articles sections */}
        <article className="articles">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn pry-btn"
            onClick={() => navigate("/ask")}
          >
            Ask Question
          </motion.button>
          <div className="related"></div>
        </article>
      </section>
      <Footer_main />
    </>
  );
}

export default Home;
