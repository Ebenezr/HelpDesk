import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Footer_main from "../components/Navbar/Footer_main";
import Navbar from "../components/Navbar/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/radixUI/Accordion";
import {
  postQuestions,
  getQuestions,
} from "../features/questions/questionSlice";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import Axios from "../API/axios";

export default function App() {
  const { isLoading, isSuccess } = useSelector((store) => store.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedTags, setTags] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tag_list: [],
  });
  const quiz_tags = [
    {
      value: "canva",
      label: "canva",
    },
    {
      value: "student-account",
      label: "student-account",
    },
    {
      value: "heroku",
      label: "heroku",
    },
    {
      value: "ruby",
      label: "ruby",
    },
    {
      value: "react.js",
      label: "react.js",
    },
    {
      value: "ruby on rails",
      label: "ruby on rails",
    },
    {
      value: "space",
      label: "space",
    },
    {
      value: "student-support",
      label: "student-support",
    },
  ];

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  const postQuiz = async (formData) => {
    await Axios.post(`/questions`, formData).then((res) => {
      navigate("/questions");
      dispatch(getQuestions(page));
    });
  };

  //handle submision
  const handleSubmit = (e) => {
    e.preventDefault();

    const mappedOptions = selectedTags.map((option) => option.value);
    setFormData({
      ...formData,
      tag_list: mappedOptions.slice(),
    });

    if (!(Array.isArray(mappedOptions) && !mappedOptions.length)) {
      try {
        postQuiz(formData);
      } catch (err) {
        console.log("Failed to post", err);
      } finally {
      }
    }
  };

  return (
    <>
      <Navbar />
      <form className="ask-question" onSubmit={handleSubmit}>
        <h2>Ask a Question </h2>
        <div className="main-row">
          <div className="section1">
            <p className="title">Title</p>
            <p className="desc">It's specific with your question</p>
            <input
              id="title"
              required
              autoFocus
              placeholder="e.g how do I enable two step authentication"
              className="inputs"
              value={formData?.title}
              onChange={handleChange}
            />
            <p className="title">Body</p>
            <p className="desc">It's specific with your question</p>
            <textarea
              required
              id="description"
              rows={6}
              className="inputs"
              value={formData?.description}
              onChange={handleChange}
            />
            <p className="title">Tags</p>
            <p className="desc">
              Add tags to describe what your question is about
            </p>
            <MultiSelect
              options={quiz_tags}
              value={selectedTags}
              onChange={setTags}
              labelledBy="Select"
            />
            {/* <input
              className="inputs"
              placeholder="e.g (Two step authentication)"
            /> */}
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
        <button className="btn pry-btn" type="submit">
          Post question
        </button>
      </form>
      <Footer_main />
    </>
  );
}
