import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer_main from "../components/Navbar/Footer_main";
import Navbar from "../components/Navbar/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/radixUI/Accordion";

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
            <div className="accordion">
              <Accordion type="single" defaultValue="item-1" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    1. Write a title for the question
                  </AccordionTrigger>
                  <AccordionContent>Summarize the problem.</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>2. Write the body section</AccordionTrigger>
                  <AccordionContent>
                    Describe what you've tried <br></br>Describe details of your
                    issue
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>3. Add related tags</AccordionTrigger>
                  <AccordionContent>
                    Include related tags of your question by searching and
                    chhoosing them.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>4. Post question</AccordionTrigger>
                  <AccordionContent>
                    Review for any typo", "Post your question
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <button className="btn pry-btn">Post question </button>
      </section>
      <Footer_main />
    </>
  );
}
