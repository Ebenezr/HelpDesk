import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
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

const Solutions = ({ question }) => {
  useEffect(() => {
    console.log(question);
  }, []);
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
              <TiArrowSortedUp className="chevrons" />
              <p>23</p>
              <TiArrowSortedDown className="chevrons" />
              <BsFillBookmarkFill className="chevrons bookmark" />
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
          <h2 className="article-title">{question?.solution.length} Answers</h2>
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
                <small>answered 3s ago</small>
                <Avatar className="avatar">
                  <AvatarImage src=" " alt="Pedro Duarte" />
                  <AvatarFallback>EB</AvatarFallback>
                </Avatar>
                <p className="username">Ebenezar</p>
              </div>
            </div>
          ))}
          <h2 className="article-title">your answer</h2>
          <div className="your-answer">
            <textarea
              rows={7}
              className="answer-text"
              id="text-answer"
            ></textarea>
            <button className="btn pry-btn">Post your answer</button>
            <small>
              Not the answer you're looking for? Browse other questions tagged
              student account or <span>ask your own question.</span>
            </small>
          </div>
        </main>
        {/* articles sections */}
        <article className="articles">
          <button className="btn pry-btn">Ask Question</button>
          <div className="related"></div>
        </article>
      </section>
      <Footer_main />
    </>
  );
};

export default Solutions;
