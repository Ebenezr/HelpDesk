import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";

function Register() {
  const [status, setStatus] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, user } = useSelector(
    (store) => store.user
  );
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  //hangle change event
  const handleChange = (event) => {
    const key = event.target.id;
    const value = event.target.value;

    setFormData({ ...formData, [key]: value });
  };
  //handle submision
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const originalPromiseResults = await dispatch(registerUser(formData))
        .unwrap()
        .then(() => {
          setStatus(true);
          //navigate to homepage on success
          setTimeout(() => {
            setFormData({
              first_name: "",
              last_name: "",
              username: "",
              email: "",
              password: "",
              confirm_password: "",
            });
            navigate("/questions");
          }, 1000);
        })
        .catch((err) => {});

      return originalPromiseResults;
    } catch (err) {
      // console.log("Failed to post", err);
    } finally {
      setTimeout(() => {
        setStatus(null);
        dispatch(reset());
        //reset form inputs
      }, 1000);
    }
  };

  return (
    <form className="sign__up" onSubmit={handleSubmit}>
      <h1>Join Our Community</h1>
      <div className="formBody">
        <span className="input_group">
          <input
            required
            type="text"
            id="last_name"
            className="inputs"
            placeholder="First Name"
            value={formData?.last_name}
            onChange={handleChange}
          ></input>
        </span>
        <span className="input_group">
          <input
            required
            type="text"
            id="first_name"
            className="inputs"
            placeholder="Last Name"
            value={formData?.first_name}
            onChange={handleChange}
          ></input>
        </span>
        <span className="input_group">
          <input
            required
            type="text"
            id="username"
            className="inputs"
            placeholder="User Name"
            value={formData?.username}
            onChange={handleChange}
          ></input>
        </span>
        <span className="input_group">
          <input
            required
            type="email"
            id="email"
            className="inputs"
            placeholder="Email"
            value={formData?.email}
            onChange={handleChange}
          ></input>
        </span>
        <span className="input_group">
          <input
            required
            autoComplete="new-password"
            type="password"
            id="password"
            className="inputs"
            placeholder="Password"
            value={formData?.password}
            onChange={handleChange}
          ></input>
        </span>
        <span className="input_group">
          <input
            required
            autoComplete="new-password"
            type="password"
            id="confirm_password"
            className="inputs"
            placeholder="Password Confirmation"
            value={formData?.confirm_password}
            onChange={handleChange}
          />
        </span>
      </div>
      <div className="signup__footer">
        <button className="btn pry-btn" type="submit">
          {isLoading ? "SIGNING YOU UP..." : " PROCEED"}
        </button>
      </div>
      <div className="sign-up-terms">
        <p>
          By proceeding you agree to the privacy policy and <br></br>
          <span>terms of service</span>
        </p>
      </div>
      {isSuccess && status ? (
        <div className="form__status active">Account Created</div>
      ) : isError && status === false ? (
        <div className="form__status">
          Failed To Create account check on your details.
        </div>
      ) : null}
    </form>
  );
}

export default Register;
