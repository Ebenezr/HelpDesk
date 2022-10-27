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
import { upvote, downvote } from "../features/questions/questionSlice";
import { useDispatch } from "react-redux";
import {
  getQuestions,
  postBookmark,
  postSolutions,
} from "../features/questions/questionSlice";

const Solutions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [question, setQuiz] = useState({});
  const [solution, setSolution] = useState("");
  useEffect(() => {
    const quiz = JSON.parse(localStorage.getItem("quiz") || "");
    setQuiz(quiz);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (event) => {
    setSolution(event.target.value);
    console.log(solution);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(solution);
    try {
      dispatch(
        postSolutions({
          votes: 0,
          description: solution,
          question_id: question.id,
        })
      ).unwrap();
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
            <h3>{question?.title}</h3>
            <small>Asked 2 days ago</small>
          </div>
          <div className="question">
            {/* submenu for question votting and bookmarking */}
            <div className="submenu">
              <TiArrowSortedUp
                className="chevrons"
                onClick={() => {
                  dispatch(upvote(question.id));
                }}
              />
              <p>{question?.votes}</p>
              <TiArrowSortedDown
                className="chevrons"
                onClick={() => {
                  dispatch(downvote(question?.id));
                }}
              />
              <BsFillBookmarkFill
                className="chevrons bookmark"
                onClick={() => {
                  dispatch(postBookmark({ question_id: question?.id }));
                }}
              />
            </div>
            <div className="question-content">{question?.description}</div>
            <div className="user-card">
              <small>asked 3 days ago</small>
              {/* image component */}
              <Avatar className="avatar">
                <AvatarImage src=" " alt="Avatar" />
                {/* if image isnt available revert to user initials */}
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              <p className="username">{question?.user?.username}</p>
            </div>
          </div>
          <h2 className="article-title">
            {question?.solution?.length} Answers
          </h2>
          {question?.solutions?.map((soln) => (
            <div className="question" key={soln.id}>
              {/* submenu for solution votting */}
              <div className="submenu">
                <TiArrowSortedUp className="chevrons" />
                <p>{soln?.votes}</p>
                <TiArrowSortedDown className="chevrons" />
                {/* <BsFillBookmarkFill className="chevrons bookmark" /> */}
              </div>
              <div className="question-content">{soln?.description}</div>
              <div className="user-card">
                <small>
                  answered{" "}
                  <ReactTimeAgo
                    className="time-ago"
                    date={Date.parse(question?.created_at)}
                    locale="en-US"
                  />
                </small>
                <Avatar className="avatar">
                  <AvatarImage src=" " alt="Pedro Duarte" />
                  <AvatarFallback>EB</AvatarFallback>
                </Avatar>
                <p className="username">Ebenezar</p>
              </div>
            </div>
          ))}
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
              Post your answer
            </button>
            <small>
              Not the answer you're looking for? Browse other questions tagged
              student account or <span>ask your own question.</span>
            </small>
          </form>
        </main>
        {/* articles sections */}
        <article className="articles">
          <button
            className="btn pry-btn"
            onClick={() => {
              navigate("/ask");
            }}
          >
            Ask Question
          </button>
          <div className="related"></div>
        </article>
      </section>
      <Footer_main />
    </>
  );
};

export default Solutions;
