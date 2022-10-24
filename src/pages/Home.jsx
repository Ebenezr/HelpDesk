import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allquestions, votes } = useSelector((store) => store.questions);

  useEffect(() => {
    console.log(allquestions);
  }, []);
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
          <small>{allquestions.length} questions</small>
        </div>
        {allquestions?.map((question) => (
          <div className="quiz-card">
            {/* question cards */}
            <div className="quiz-card-status">
              <p>{question?.votes} votes</p>
              <small>{question?.solutions.length} answers</small>
            </div>
            <div className="question-title">
              <p>{question?.title}</p>
            </div>
            <div className="labels-tags">
              {question?.tags?.map((tag) => (
                <small>{tag?.name}</small>
              ))}
            </div>
            <div className="userinfo-card">
              <p className="username">{question?.user?.username}</p>
              <small>asked 14 days ago</small>
            </div>
          </div>
        ))}
      </main>
      {/* articles sections */}
      <article className="articles">
        <button className="btn pry-btn" onClick={() => navigate("/solution")}>
          Ask Question
        </button>
        <div className="related"></div>
      </article>
    </section>
  );
}

export default Home;
