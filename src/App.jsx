import "./sass/style.scss";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Solutions from "./pages/Solutions";

function App() {
  return (
    <>
      <Navbar />
      <Solutions />
    </>
  );
}

export default App;
