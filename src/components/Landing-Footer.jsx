import React from "react";

const styles = {
  footer: {
    // padding: "350px",
    marginLeft: "25px",
    marginTop: "20px",
    textAlign: "center",
  },
  starter: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
  },
  seconder: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#0a95ff",
  },
  content: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "12px",
    color: "#7a7878",
  },
};

function LandingFooter() {
  return (
    <footer className="landing__footer">
      <h2>Ask your Questions,</h2>
      <h3>Get your Answers</h3>
      <p>
        Just post your question on our portal and
        <br></br>
        You'll get your answer with all
        <br></br>
        the details as requested.
      </p>
    </footer>
  );
}

export default LandingFooter;
