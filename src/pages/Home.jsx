import { NavLink } from "react-router-dom";
import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avata";

function Home() {
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
            Try this! Loremipsum dolor sit ipsum dolor sit amet consectetur
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student support</small>
            <small>student support</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2days ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>15 votes</p>
            <small>2 answers</small>
          </div>
          <div className="question-title">
            Try this! Loremipsum dolor sit ipsum dolor sit amet consectetur
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student support</small>
            <small>student support</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2days ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>15 votes</p>
            <small>2 answers</small>
          </div>
          <div className="question-title">
            Try this! Loremipsum dolor sit ipsum dolor sit amet consectetur
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student support</small>
            <small>student support</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2days ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>15 votes</p>
            <small>2 answers</small>
          </div>
          <div className="question-title">
            Try this! Loremipsum dolor sit ipsum dolor sit amet consectetur
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student support</small>
            <small>student support</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2days ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>15 votes</p>
            <small>2 answers</small>
          </div>
          <div className="question-title">
            Try this! Loremipsum dolor sit ipsum dolor sit amet consectetur
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student support</small>
            <small>student support</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2days ago</small>
          </div>
        </div>
        <div className="quiz-card">
          {/* question cards */}
          <div className="quiz-card-status">
            <p>15 votes</p>
            <small>2 answers</small>
          </div>
          <div className="question-title">
            Try this! Loremipsum dolor sit ipsum dolor sit amet consectetur
          </div>
          <div className="labels-tags">
            <small>account</small>
            <small>student support</small>
            <small>student support</small>
            <small>student support</small>
          </div>
          <div className="userinfo-card">
            <p className="username">Ebenezar</p>
            <small>asked 2days ago</small>
          </div>
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
