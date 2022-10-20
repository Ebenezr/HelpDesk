import React from "react";

const styles = {
  span: {
    width: "100%",
    height: "100%",
    color: "#f48225",
  },
  wrapper: {
    display: "flex",
    position: "relative",
    margin: "10px",
    padding: "20px",
    justifyContent: "end",
    alignItems: "center",
    borderBottom: "1px solid #aba8a8",
  },

  items: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
    fontWeight: "medium",
    lineHeight: 1.5,
    padding: "20px",
    flexWrap: "nowrap",
    color: "#7a7878",
  },
  header: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "medium",
    fontWeight: "bold",
    padding: "900px",
  },
  button: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "medium",
    fontWeight: "0",
    width: "10%",
    backgroundColor: "#f48225",
    borderRadius: "7px",
    color: "#f1f2f3",
    border: "none",
    padding: "3px 12px",
  },
};

function Navbar() {
  return (
    <nav>
      <div style={styles.wrapper}>
        <div style={styles.list}>
          <a style={styles.header}>
            HELP<span style={styles.span}>DESK</span>
          </a>
          <a style={styles.items}>HOME</a>
          <a style={styles.items}>ASK</a>
          <a style={styles.items}>QUESTIONS</a>
          <a style={styles.items}>FAQS</a>
        </div>
        <button style={styles.button}>LOGIN</button>
      </div>
    </nav>
  );
}

export default Navbar;
