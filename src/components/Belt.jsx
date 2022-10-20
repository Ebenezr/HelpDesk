import React from "react";

const styles = {
  wrapper: {
    backgroundColor: "#0a95ff",
    height: "200px",
    marginTop: "150px",
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
  },
  searchWrapper: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    backgroundColor: "#f48225",
    color: "#fff",
    borderColor: "#f48225",
  },
  searchInput: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "bold",
    color: "#fff",
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
