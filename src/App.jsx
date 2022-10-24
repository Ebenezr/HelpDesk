import Navbar from "./components/Navbar/Navbar";
import "./sass/style.scss";
import React from "react";
import Routing from "./pages/_routes";
import Searchbar from "./components/Navbar/Searchbar";
import Footer from "./components/Navbar/Footer";

function App() {
  return (
    <>
      <Searchbar />
      <Routing />
      <Footer />
    </>
  );
}

export default App;
