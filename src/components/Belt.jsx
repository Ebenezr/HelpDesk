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
    width: "90px"
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
    <div style={styles.wrapper}>
      <p style={styles.starter}>Ask a Question ?</p>
      <p style={styles.content}>
        You can ask your question/ post on our community by providing all the
        required details
      </p>
      <form style={styles.search}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search..."
          name="search"
        />
        <button style={styles.searchWrapper} type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
}

export default Belt;
