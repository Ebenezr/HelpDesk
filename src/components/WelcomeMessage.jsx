import React from "react";

const styles = {
  containerFluid: {
    fontFamily: "Poppins, sans-serif",
    padding: "15px",
    marginLeft: "35px",
  },
  starter: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
  },
  content: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "12px",
    color: "#7a7878",
  },
  buttons: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
    fontWeight: "medium",
  },
  button1: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "small",
    fontWeight: "0",
    height: "30px",
    width: "8%",
    backgroundColor: "#f48225",
    borderRadius: "7px",
    color: "#f1f2f3",
    borderColor: "#f48225",
  },
  button2: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "small",
    fontWeight: "0",
    height: "30px",
    width: "8%",
    backgroundColor: "#fcede1",
    borderRadius: "7px",
    color: "#f48225",
    borderColor: "#f48225",
  }
};

function Welcome() {
  return (
    <div style={styles.containerFluid}>
      <p style={styles.starter}>Ask to the Experts</p>
      <p style={styles.content}>
        Online portal for students to comminivate with each other<br></br>
        It allows the students to ask the questions and students with <br></br>
        required expertise will provide solutions.
      </p>
      <div style={styles.buttons}>
        <button style={styles.button1}>EXPLORE</button>
        <button style={styles.button2}>EXPLORE</button>
      </div>
    </div>
  );
}

export default Welcome;
