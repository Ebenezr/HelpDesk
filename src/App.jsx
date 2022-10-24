import Navbar from "./components/Navbar/Navbar";
import "./sass/style.scss";
import React, { useEffect } from "react";
import Routing from "./pages/_routes";
import Searchbar from "./components/Navbar/Searchbar";
import Footer from "./components/Navbar/Footer";
import { getQuestions } from "./features/questions/questionSlice";
import { useDispatch, useSelector } from "react-redux";
import Landing from "./pages/Landing";
import Solutions from "../src/pages/Solutions";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestions("random"));
  }, []);
  return (
    <>
      <Searchbar />
      <Routing />
      <Footer />
    </>
  )
}

export default App;
