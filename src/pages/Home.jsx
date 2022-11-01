import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { MdAccountCircle, MdHome } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestions,
  tagsFilter,
  getFAQS,
  set_current_quiz,
} from "../features/questions/questionSlice";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);
import ReactTimeAgo from "react-time-ago";
import { motion } from "framer-motion";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";
import { Tooltip } from "@mui/material";
import moment from "moment";
import Pagination from "@mui/material/Pagination";
import Navbar from "../components/Navbar/Navbar";
import { useMemo } from "react";
import debounce from "lodash.debounce";
import { CiSearch } from "react-icons/ci";

function Home() {
  const navigate = useNavigate();
  const { isLoading, allquestions, total, faqs } = useSelector(
    (store) => store.questions
  );
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  //fetch all questions and faqs
  useEffect(() => {
    dispatch(getQuestions(page));
    dispatch(getFAQS());
  }, [page, dispatch]);

  //pagination next page funtion
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //filter questions
  const handleSearch = (event) => {
    if (event.target.value !== "") {
      dispatch(tagsFilter({ term: event.target.value }));
    } else {
      dispatch(getQuestions(page));
    }
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
    <>
      {/* <Navbar  /> */}
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
            <div className="filter">
              <CiSearch className="search__icon" />
              <input
                type="search"
                className="tag-filter"
                placeholder="Filter by tag name"
                onChange={debouncedResults}
              ></input>
            </div>
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
                      dispatch(set_current_quiz(question));
                      navigate("/solutions");
                    }}
                  >
                    {question?.title}
                  </p>
                </div>
                <div
                  className="labels-tags"
                  style={{ display: "flex", gap: "5px" }}
                >
                  {question?.tag_list?.map((tag, index) => (
                    <small style={{ color: "#7a7878" }} key={index}>
                      {tag}
                    </small>
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
            <Pagination
              count={Math.floor(total / 3)}
              page={page}
              onChange={handleChangePage}
            />

            {/* <motion.button
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
            </motion.button> */}
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
          <div className="faqs">
            <h2>Frequesntly asked Questions</h2>
            <div className="span-card">
              {faqs?.map((quiz) => (
                <span className="bullets-wrapper" key={quiz?.id}>
                  <span className="text-btn">
                    <Tooltip title="Votes">
                      <button className="info-btn">{quiz?.votes}</button>
                    </Tooltip>

                    <small
                      onClick={() => {
                        dispatch(set_current_quiz(quiz));
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
        </article>
      </section>
      <Footer_main />
    </>
  );
}

export default Home;
