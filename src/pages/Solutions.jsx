import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../components/radixUI/avatar";
import { MdAccountCircle, MdHome } from "react-icons/md";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";
import ReactTimeAgo from "react-time-ago";
import {
  reset,
  getRelated,
  voteSolution,
  getQuestions,
  getQuestion,
  patchQuestions,
  postBookmark,
  postSolutions,
  set_current_quiz,
} from "../features/questions/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../API/axios";
import { Tooltip } from "@mui/material";
import moment from "moment";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar/Navbar";

const Solutions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [question, setQuiz] = useState({
  //   created_at: new Date(),
  // });
  const [solution, setSolution] = useState("");
  // const [related, setRelated] = useState([]);
  const { user, authenticated } = useSelector((store) => store.user);
  const { isLoading, currentQuestion, isSuccess, related } = useSelector(
    (store) => store.questions
  );
  //get seleted question
  useEffect(() => {
    dispatch(getRelated({ term: currentQuestion?.tag_list }));
  }, []);

  //get solution filed values
  const handleChange = (event) => {
    setSolution(event.target.value);
  };

  //bookmark a question
  const postBook = async (formData) => {
    if (!authenticated) {
      return alert("You must create an account first!");
    }
    try {
      await dispatch(postBookmark(formData))
        .unwrap()
        .then(() => alert("Question Bookmaked!"));
    } catch (e) {
      alert("Question already Bookmarked!");
    } finally {
      //reset store states
      setTimeout(() => {
        dispatch(reset());
      }, 2000);
    }
  };

  //post a solution
  const voteQuestion = async (id, formData) => {
    if (!authenticated) {
      return alert("You must be logged in to vote!");
    }
    try {
      await Axios.patch(`/questions/${id}`, formData).then((res) => {
        dispatch(set_current_quiz(res.data));
        setSolution("");
      });
    } catch (err) {
      // console.error(err);
    } finally {
      //reset store states
      setTimeout(() => {
        dispatch(reset());
      }, 1000);
    }
  };

  //todo write filter funtion for related questions
  //       let arr = [];
  //       let newarr = [];
  //       newarr = arr.filter((item) => item.id !== currentQuestion.id);

  //update seleted solution
  const voteSolution = async (id, formData) => {
    if (!authenticated) {
      return alert("You must be logged in to vote!");
    }
    try {
      await Axios.patch(`/solutions/${id}`, formData).then((res) => {
        dispatch(set_current_quiz(res.data));
      });
    } catch (error) {}
  };

  //post a solution
  const postSoln = async () => {
    if (!authenticated) {
      return alert("You must be logged in to post a solution!");
    }
    try {
      await dispatch(
        postSolutions({
          user_id: user?.id,
          question_id: currentQuestion?.id,
          votes: 0,
          description: solution,
        })
      )
        .unwrap()
        .then((data) => {
          //update question with posted solution
          dispatch(set_current_quiz(data));
          setSolution("");
          alert("Solution has been posted");
        });
    } catch (err) {
      // console.error(err);
    } finally {
      //reset store states
      setTimeout(() => {
        dispatch(reset());
      }, 1000);
    }
  };

  //post solution
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      postSoln({
        user_id: user?.id,
        votes: 0,
        description: solution,
        question_id: currentQuestion?.id,
      });
    } catch (e) {}
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
          <div className="section-header">
            <h3>{currentQuestion?.title}</h3>
            <small>
              Asked{" "}
              <ReactTimeAgo
                style={{ fontSize: "0.8rem" }}
                className="time-ago"
                date={Date.parse(currentQuestion?.created_at)}
                locale="en-US"
              />
            </small>
          </div>
          <div className="question">
            {/* submenu for question votting and bookmarking */}
            <div className="submenu">
              <TiArrowSortedUp
                className="chevrons"
                onClick={() =>
                  voteQuestion(currentQuestion?.id, {
                    votes: currentQuestion?.votes + 1,
                  })
                }
              />
              <p>{currentQuestion?.votes}</p>
              <TiArrowSortedDown
                className="chevrons"
                onClick={() =>
                  voteQuestion(currentQuestion?.id, {
                    votes: currentQuestion?.votes - 1,
                  })
                }
              />
              {isSuccess ? (
                <BsFillBookmarkFill
                  className="chevrons bookmark"
                  color="#f48225"
                  onClick={() => {
                    postBook({
                      question_id: currentQuestion?.id,
                      user_id: user?.id,
                    });
                  }}
                />
              ) : (
                <BsFillBookmarkFill
                  className="chevrons bookmark"
                  onClick={() => {
                    postBook({
                      question_id: currentQuestion?.id,
                      user_id: user?.id,
                    });
                  }}
                />
              )}
            </div>
            <div className="question-content">
              {currentQuestion?.description}
            </div>
            <div className="user-card">
              <small>
                asked{" "}
                <ReactTimeAgo
                  style={{ fontSize: "0.8rem" }}
                  className="time-ago"
                  date={Date.parse(currentQuestion?.created_at)}
                  locale="en-US"
                />{" "}
              </small>
              {/* image component */}
              <Avatar className="avatar">
                <AvatarImage src=" " alt="Avatar" />
                {/* if image isnt available revert to user initials */}
                <AvatarFallback>
                  {currentQuestion?.user?.first_name?.slice(0, 1)}
                  {currentQuestion?.user?.last_name?.slice(0, 1)}
                </AvatarFallback>
              </Avatar>
              <p className="username">{currentQuestion?.user?.username}</p>
            </div>
          </div>
          <div className="solutions-wrapper">
            <h2 className="article-title">
              {currentQuestion?.solutions?.length} Answers
            </h2>
            {currentQuestion?.solutions?.map((soln) => (
              <div className="question" key={soln.id}>
                {/* submenu for solution votting */}
                <div className="submenu">
                  <TiArrowSortedUp
                    className="chevrons"
                    onClick={() =>
                      voteSolution(soln?.id, {
                        votes: soln?.votes + 1,
                      })
                    }
                  />
                  <p>{soln?.votes}</p>
                  <TiArrowSortedDown
                    className="chevrons"
                    onClick={() =>
                      voteSolution(soln?.id, {
                        votes: soln?.votes - 1,
                      })
                    }
                  />
                  {/* <BsFillBookmarkFill className="chevrons bookmark" /> */}
                </div>
                <div className="question-content">{soln?.description}</div>
                <div className="user-card">
                  <small>
                    answered{" "}
                    <ReactTimeAgo
                      style={{ fontSize: "0.8rem" }}
                      className="time-ago"
                      date={Date.parse(soln?.created_at)}
                      locale="en-US"
                    />
                  </small>
                  <Avatar className="avatar">
                    <AvatarImage src=" " alt="Pedro Duarte" />
                    <AvatarFallback>
                      {soln?.first_name?.slice(0, 1)}
                      {soln?.last_name?.slice(0, 1)}
                    </AvatarFallback>
                  </Avatar>
                  <p className="username">{soln?.username}</p>
                </div>
              </div>
            ))}
          </div>
          <h2 className="article-title">Your answer</h2>
          <form className="your-answer" onSubmit={handleSubmit}>
            <textarea
              rows={7}
              className="answer-text"
              id="text-answer"
              value={solution}
              onChange={handleChange}
            ></textarea>
            <button className="btn pry-btn" type="submit">
              {isLoading ? "Posting..." : "Post your answer"}
            </button>
            <small>
              Not the answer you're looking for? Browse other questions tagged
              student account or <span>ask your own question.</span>
            </small>
          </form>
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
            <h2>Related Questions</h2>
            <div className="span-card">
              {related.length > 0 ? (
                related?.map((quiz) => (
                  <span className="bullets-wrapper" key={quiz?.id}>
                    <span className="text-btn">
                      <Tooltip title="Votes">
                        <button className="info-btn">{quiz?.votes}</button>
                      </Tooltip>

                      <small
                        onClick={() => {
                          dispatch(set_current_quiz(quiz));

                          // navigate("/solutions");
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
                ))
              ) : (
                <small>No matches found</small>
              )}
            </div>
          </div>
        </article>
      </section>
      <Footer_main />
    </>
  );
};

export default Solutions;
