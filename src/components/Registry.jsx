import React from "react";
import { Label } from "../components/radixUI/Label";
// const styles = {
//   form: {
//     marginLeft: "1000px",
//     marginTop: "-135px",
//     textAlign: "center",
//   },
//   header: {
//     fontFamily: "Poppins, sans-serif",
//     fontWeight: "small",
//     color: "#0a95ff",
//   },
//   elements: {
//     height: "30px",
//     borderRadius: "5px",
//     borderColor: "#f1f2f3",
//     margin: "2px",
//     color: "#aba8a8",
//   },
//   button: {
//     height: "30px",
//     borderRadius: "5px",
//     backgroundColor: "#0a95ff",
//     color: "#f1f2f3",
//     width: "120px",
//   },
//   tagLine: {
//     color: "#aba8a8",
//     fontWeight: "small",
//   },
// };

function Register() {
  return (
    <div className="sign__up">
      <h1>Join Our Community</h1>
      <form className="formBody">
        <span className="input_group">
          <input
            type="text"
            id="fullname"
            className="inputs"
            placeholder="Full Name"
          ></input>
        </span>
        <span className="input_group">
          <input
            type="email"
            id="email"
            className="inputs"
            placeholder="name@student.moringaschool.com"
          ></input>
        </span>
        <span className="input_group">
          <input
            type="password"
            id="password"
            className="inputs"
            placeholder="********"
          ></input>
        </span>
        <span className="input_group">
          <input
            type="password"
            id="confirm_password"
            className="inputs"
            placeholder="********"
          ></input>
        </span>
      </form>
      <div className="signup__footer">
        <button className="btn pry-btn" type="submit">
          PROCEED
        </button>
      </div>
      <div>
        <p>
          By proceeding you agree to the privacy policy and <br></br> terms of
          service
        </p>
      </div>
    </div>
  );
}

export default Register;
