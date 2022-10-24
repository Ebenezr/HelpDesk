import React from "react";

const styles = {
  main__footer: {
    backgroundColor: "#fff",
    textAlign: "center", 
    color: "#f48225",
    
  }
}

function Footer() {
  return (
    <footer style = {styles.main__footer}>
      <small className="footer-text">
        Copy right © HELPDESK 2022 All rights reserved
      </small>
    </footer>
  );
}

export default Footer;
