import React from "react";

const styles = {
  wrapper: {
    backgroundColor: "#0a95ff",
    height: "130px",
    marginTop: "120px",
    textAlign: "center",
  },
  starter: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#fff",
  },
  content: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "12px",
    color: "#fff",
  },
  search: {
    fontFamily: "Poppins, sans-serif",
    fontSize: "12px",
    borderRadius: "30px",
    // marginTop: "100px",
  },
  searchWrapper: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    backgroundColor: "#f48225",
    color: "#fff",
    borderColor: "#f48225",
    marginTop: "65px",
    borderRadius: "5px",
    height: "30px",
    width: "90px",
  },
  searchInput: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "#fff",
    borderRadius: "10px",
    height: "30px",
  },
};

function Belt() {
  return (
    <div className="belt-wrapper">
      <h2 className="belt-title">Ask a Question ?</h2>
      <p className="belt-text">
        You can ask your question/ post on our community by providing all the
        required details
      </p>
      {/* <form className="landing-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search Anything..."
          name="search"
        />
        <button className="btn sec-btn" type="submit">
          SEARCH
        </button>
      </form> */}
    </div>
  );
}

export default Belt;
