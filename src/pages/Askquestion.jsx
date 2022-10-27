import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer_main from "../components/Navbar/Footer_main";
import Navbar from "../components/Navbar/Navbar";

const SummaryRow = ({ title, rows }) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <div className="row-title">
        <div>{title}</div>
        <MdKeyboardArrowDown onClick={() => setOpen(!open)} size={20} />
      </div>
      <ul>
        {open &&
          rows.map((r) => {
            return <li>{r}</li>;
          })}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Navbar />
      <section className="ask-question">
        <h2>Ask a Question </h2>
        <div className="main-row">
          <div className="section1">
            <p className="title">Title</p>
            <p className="desc">It's specific with your question</p>
            <input
              placeholder="e.g how do I enable two step authentication"
              className="inputs"
            />
            <p className="title">Body</p>
            <p className="desc">It's specific with your question</p>
            <textarea rows={6} className="inputs" />
            <p className="title">Tags</p>
            <p className="desc">
              Add tags to describe what your question is about
            </p>
            <input
              className="inputs"
              placeholder="e.g (Two step authentication)"
            />
          </div>
          <div className="section2">
            <div className="sec2-title">How To Draft your question</div>
            <div className="sec2-body">
              <SummaryRow
                title="1. Write a title for the question"
                rows={["Summarize the problem"]}
              />
              <SummaryRow
                title="2. Write the body section"
                rows={[
                  "Describe what you've tried",
                  "Describe details of your issue",
                ]}
              />
              <SummaryRow
                title="3. Add related tags"
                rows={[
                  "Include related tags of your question by searching and chhoosing them",
                ]}
              />
              <SummaryRow
                title="4. Post question"
                rows={["review for any typo", "Post your question"]}
              />
            </div>
          </div>
        </div>
        <button className="btn pry-btn">Post question </button>
      </section>
      <Footer_main />
    </>
  );
}
