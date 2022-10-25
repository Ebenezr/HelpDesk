import React from "react";
import { Label } from "../components/radixUI/Label";
const styles = {
  form: {
    marginLeft: "1000px",
    marginTop: "-135px",
    textAlign: "center",
  },
  header: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "small",
    color: "#0a95ff",
  },
  elements: {
    height: "30px",
    borderRadius: "5px",
    borderColor: "#f1f2f3",
    margin: "2px",
    color: "#aba8a8",
  },
  button: {
    height: "30px",
    borderRadius: "5px",
    backgroundColor: "#0a95ff",
    color: "#f1f2f3",
    width: "120px",
  },
  tagLine: {
    color: "#aba8a8",
    fontWeight: "small",
  },
};

function Register() {
  return (
    <div className="sign__up">
      <h1>Join Our Community</h1>
      <form className="formBody">
        <div>
          <input
            style={styles.elements}
            type="text"
            id="fullname"
            placeholder="FULL NAME"
          />
        </div>
        <span className="input_group">
          <Label htmlFor="email" css={{ lineHeight: "35px" }}>
            Email
          </Label>
          <input
            type="email"
            id="email"
            className="inputs"
            placeholder="name@student.moringaschool.com"
          ></input>
        </span>
        <div className="password">
          <input
            style={styles.elements}
            type="password"
            placeholder="PASSOWRD"
          />
        </div>
        <div className="confirm-password">
          <input
            style={styles.elements}
            type="password"
            placeholder="CONFIRM PASSWORD"
          />
        </div>
      </form>
      <div class="footer">
        <button className="btn pri-btn" type="submit" class="btn">
          PROCEED
        </button>
      </div>
      <div style={styles.tagLine}>
        <p>
          By proceeding you agree to the privacy policy and <br></br> terms of
          service
        </p>
      </div>
    </div>
  );
}

export default Register;
