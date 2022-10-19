import { NavLink } from "react-router-dom";
import React from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "../components/avata";

const Solutions = () => {
  return (
    <section className="main-section">
      <aside className="aside">
        <NavLink className="side__nav__links" to="/questions">
          <h3>Questions</h3>
        </NavLink>
        <NavLink className="side__nav__links" to="/questions">
          <h3>Bookmarks</h3>
        </NavLink>
      </aside>
      <main className="main-section-content">
        <div className="section-header">
          <h3>Enabling two step authenthification</h3>
          <small>Asked 2 days ago</small>
        </div>

        <div className="question">
          <div className="submenu">
            <TiArrowSortedUp className="chevrons" />
            <p>23</p>
            <TiArrowSortedDown className="chevrons" />
            <BsFillBookmarkFill className="chevrons bookmark" />
          </div>
          <div className="question-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sequi
            molestiae nesciunt recusandae excepturi reprehenderit eaque iure
            quas aliquid culpa? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Porro sequi molestiae nesciunt recusandae
            excepturi reprehenderit eaque iure quas aliquid culpa?
          </div>
          <div className="user-card">
            <small>asked 3 days ago</small>
            <Avatar className="avatar">
              <AvatarImage src=" " alt="Pedro Duarte" />
              <AvatarFallback>AN</AvatarFallback>
            </Avatar>
            <p className="username">Allan</p>
          </div>
        </div>
        <h2 className="article-title">1 answer</h2>
        <div className="question">
          <div className="submenu">
            <TiArrowSortedUp className="chevrons" />
            <p>150</p>
            <TiArrowSortedDown className="chevrons" />
            <BsFillBookmarkFill className="chevrons bookmark" />
          </div>
          <div className="question-content">
            Try this! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porro sequi molestiae nesciunt recusandae excepturi reprehenderit
            eaque iure quas aliquid culpa? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Porro sequi molestiae nesciunt
            recusandae excepturi reprehenderit eaque iure quas aliquid culpa?
          </div>
          <div className="user-card">
            <small>answered 3s ago</small>
            <Avatar className="avatar">
              <AvatarImage src=" " alt="Pedro Duarte" />
              <AvatarFallback>EB</AvatarFallback>
            </Avatar>
            <p className="username">Ebenezar</p>
          </div>
        </div>
        <h2 className="article-title">your answer</h2>
        <div className="your-answer">
          <textarea name="your-answer" id="your-answer"></textarea>
          <button className="btn pry-btn">Post your answer</button>
          <small>
            Not the answer you're looking for? Browse other questions tagged
            student account or ask your own question.
          </small>
        </div>
      </main>
      <article className="articles">
        <button className="btn pri-btn">Ask Question</button>
        <div className="related"></div>
      </article>
    </section>
  );
};

export default Solutions;
