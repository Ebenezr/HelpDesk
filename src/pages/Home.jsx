import { NavLink, useNavigate } from "react-router-dom";
import React from "react";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";

function Home() {
  const navigate = useNavigate();

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
      </aside>
      {/* main content area  */}
      <main className="main-section-content">
        <div className="section-header">
          <h3>All Questions</h3>
          <small>356 questions</small>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>15 votes</p>
            <small>2 answers</small>
          </div>
          <div className="question-title">
            <p>Enabling two step authenthification</p>
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student mail</small>
            <small>canva</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Cecilia</p>
            <small>asked 14 days ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>0 votes</p>
            <small>0 answers</small>
          </div>
          <div className="question-title">
            <p>Deploying Rails api</p>
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>phase 4</small>
            <small>ruby</small>
            <small>heroku</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Alice</p>
            <small>asked 2 min ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>23 votes</p>
            <small>4 answers</small>
          </div>
          <div className="question-title">
            <p>Filling Health form</p>
          </div>
          <div className="labels-tags">
            <small>student support</small>
            <small>space</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Allan</p>
            <small>asked 1 sec ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>1 votes</p>
            <small>6 answers</small>
          </div>
          <div className="question-title">
            <p>Can’t login on canva</p>
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>canva</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2 days ago</small>
          </div>
        </div>
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
