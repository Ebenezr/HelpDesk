import Navbar from "./components/Navbar/Navbar";
import "./sass/style.scss";
import React from "react";
import Routing from "./pages/_routes";

function App() {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
}

export default App;
