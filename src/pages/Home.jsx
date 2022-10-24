import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { MdArrowBack, MdArrowForward, MdBook } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import Solutions from "./Solutions";
import { getQuestions } from "../features/questions/questionSlice";
// import {
//   Badge,
//   Box,
//   Button,
//   Divider,
//   Flex,
//   Heading,
//   HStack,
//   Icon,
//   List,
//   ListIcon,
//   ListItem,
//   Spacer,
//   Stat,
//   StatLabel,
//   StatNumber,
// } from "@chakra-ui/react";

function Home() {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState();
  const { isLoading, allquestions, total, total_pages } = useSelector(
    (store) => store.questions
  );
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions(page));
  }, [page, dispatch]);

  return (
    <section className="main-section">
      {/* side bar */}
      <aside className="aside">
        <NavLink className="side__nav__links" to="/questions">
          <BsFillPatchQuestionFill className="link__icons" />
          <h3>Questions</h3>
        </NavLink>
        <NavLink className="side__nav__links" to="/questions">
          <BsFillBookmarkFill className="link__icons" />
          <h3>Bookmarks</h3>
        </NavLink>
        <NavLink className="side__nav__links" to="/profile">
          <MdAccountCircle className="link__icons" />
          <h3>Profile</h3>
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
                    <Solutions question={question} />;
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
                <small>asked 14 days ago</small>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>Loading...</h1>
          </div>
        )}
        <div className="pagination">
          <button
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </button>
          <p>{total_pages}</p>
          <button
            //isLoading={isFetching}
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previus
          </button>
        </div>
      </main>
      {/* articles sections */}
      <article className="articles">
        <button className="btn pry-btn">Ask Question</button>
        <div className="related"></div>
      </article>
    </section>
  );
}

export default Home;
