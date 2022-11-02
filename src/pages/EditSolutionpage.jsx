import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import { MdAccountCircle, MdHome } from "react-icons/md";
import Searchbar from "../components/Navbar/Searchbar";
import Footer_main from "../components/Navbar/Footer_main";
import { HiLightBulb } from "react-icons/hi";
import ReactTimeAgo from "react-time-ago";
import { reset, patchSolution } from "../features/questions/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

const EditSolutionpage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [solution, setSolution] = useState("");
  // const [related, setRelated] = useState([]);
  const { authenticated } = useSelector((store) => store.user);
  const { isLoading, currentSolution } = useSelector(
    (store) => store.questions
  );
  //get seleted question
  useEffect(() => {
    setSolution(currentSolution?.description);
    if (!authenticated) {
      navigate("/");
    }
  }, []);

  //get solution filed values
  const handleChange = (event) => {
    setSolution(event.target.value);
  };

  //patch solution
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(
        patchSolution({ id: currentSolution?.id, description: solution })
      )
        .unwrap()
        .then((data) => {
          //update question with posted solution
          navigate("/questions");
          setSolution("");
          alert("Solution has been posted");
        });
    } catch (err) {
      // console.error(err);
    } finally {
      //reset store states
      setTimeout(() => {
        dispatch(reset());
      }, 1000);
    }
  };
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
            <h3>{currentSolution?.question?.title}</h3>
            <small>
              Asked{" "}
              <ReactTimeAgo
                style={{ fontSize: "0.8rem" }}
                className="time-ago"
                date={Date.parse(currentSolution?.question?.created_at)}
                locale="en-US"
              />
            </small>
          </div>

          <h2 className="article-title">Your answer</h2>
          <form className="your-answer" onSubmit={handleSubmit}>
            <textarea
              rows={7}
              className="answer-text"
              id="text-answer"
              value={solution}
              onChange={handleChange}
            ></textarea>
            <LoadingButton
              style={{ backgroundColor: "#0a95ff", color: "#fff" }}
              size="large"
              type="submit"
              //onClick={handleClick}
              loadingPosition="start"
              startIcon={<SaveIcon />}
              loading={isLoading}
              variant="contained"
            >
              Update your answer
            </LoadingButton>
            <small>
              Not the answer you're looking for? Browse other questions tagged
              student account or <span>ask your own question.</span>
            </small>
          </form>
        </main>
        {/* articles sections */}
      </section>
      <Footer_main />
    </>
  );
};

export default EditSolutionpage;
