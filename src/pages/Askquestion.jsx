import { NavLink, useNavigate } from "react-router-dom";
import { BsFillBookmarkFill, BsFillPatchQuestionFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import Footer_main from "../components/Navbar/Footer_main";
import Navbar from "../components/Navbar/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/radixUI/Accordion";
import { postQuestions, reset } from "../features/questions/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import { HiLightBulb } from "react-icons/hi";
import { MdAccountCircle, MdHome } from "react-icons/md";
import Select from "react-select";
import Axios from "../API/axios";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

export default function App() {
  const { isLoading, isSuccess, isError } = useSelector(
    (store) => store.questions
  );
  const { currentQuestion } = useSelector((store) => store.questions);
  const { user, authenticated } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState();
  const [formData, setFormData] = useState({
    user_id: 0,
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
    {
      value: "java-script",
      label: "java-script",
    },
    {
      value: "type-script",
      label: "type-script",
    },
    {
      value: "Student-Laptop",
      label: "Student-Laptop",
    },
    {
      value: "Ubuntu",
      label: "Ubuntu",
    },
    {
      value: "Windows-WSL",
      label: "Windows-WSL",
    },
  ];

  useEffect(() => {
    //if user isnt loged in redirect to login page
    !authenticated ? navigate("/") : null;
  }, []);

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  //update seleted solution
  const UpdateQuestion = async (id, formData) => {
    try {
      await Axios.patch(`/questions/${id}`, formData).then((res) => {
        setStatus(true);
        //navigate to homepage on success
        setTimeout(() => {
          navigate("/questions");
        }, 1000);
      });
    } catch (error) {
      setStatus(false);
    } finally {
      //reset store states
      setTimeout(() => {
        setStatus(null);
        //reset form inputs
        setFormData({
          user_id: 0,
          title: "",
          description: "",
          tag_list: [],
        });
      }, 1000);
    }
  };

  //handle submision
  const handleSubmit = async () => {
    try {
      const originalPromiseResults = await dispatch(postQuestions(formData))
        .unwrap()
        .then((originalPromiseResult) => {
          setStatus(true);
          //navigate to homepage on success
          setTimeout(() => {
            navigate("/questions");
          }, 1000);
        })
        .catch((err) => {
          setStatus(false);
        });
      return originalPromiseResults;
    } catch (err) {
      setStatus(false);
    } finally {
      //reset store states
      setTimeout(() => {
        setStatus(null);
        dispatch(reset());
        //reset form inputs
        setFormData({
          user_id: 0,
          title: "",
          description: "",
          tag_list: [],
        });
      }, 1000);
    }
  };
  return (
    <>
      <Navbar />
      <section className="main-section">
        {/* side bar */}
        <aside className="aside">
          <NavLink
            className="side__nav__links"
            to="/questions"
            activeclassname="active"
          >
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
          <NavLink
            className="side__nav__links"
            activeclassname="active"
            to="/profile"
          >
            <MdAccountCircle className="link__icons" />
            <h3>Profile</h3>
          </NavLink>
          <NavLink
            className="side__nav__links"
            activeclassname="active"
            to="/home"
          >
            <MdHome className="link__icons" />
            <h3>Home</h3>
          </NavLink>
        </aside>
        <div className="main-section-content">
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
              <Select
                options={quiz_tags}
                placeholder="Select Tags"
                value={selectedOptions}
                onChange={handleSelect}
                isSearchable={true}
                isMulti
                onBlur={() => {
                  const mappedOptions = selectedOptions.map(
                    (option) => option.value
                  );
                  setFormData({
                    ...formData,
                    tag_list: mappedOptions.slice(),
                    user_id: user?.id,
                  });
                }}
              />
              {isSuccess && status === true ? (
                <div className="form__status active">Question Posted</div>
              ) : isError && status === false ? (
                <div className="form__status">Failed Post question :(</div>
              ) : null}
            </div>
          </div>
          <LoadingButton
            style={{ backgroundColor: "#0a95ff", color: "#fff" }}
            size="large"
            type="submit"
            onClick={handleSubmit}
            loadingPosition="start"
            startIcon={<SendIcon />}
            loading={isLoading}
            variant="contained"
          >
            Post your Question
          </LoadingButton>
          {/* <button className="btn pry-btn" type="submit" onClick={handleSubmit}>
            {isLoading ? "Posting question..." : " Post question"}
          </button> */}
        </div>
        <article className="articles">
          <div className="accordion-wrapper">
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
        </article>
      </section>
      <Footer_main />
    </>
  );
}
