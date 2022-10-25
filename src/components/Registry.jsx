import React, { useEffect, useState } from "react";
import { Label } from "../components/radixUI/Label";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/users/userSlice";

function Register() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((store) => store.user);
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
  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(registerUser(formData)).unwrap();
    } catch (err) {
      console.log("Failed to post", err);
    } finally {
      setFormData({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      });
    }
  };

  useEffect(() => {}, []);

  return (
    <form className="sign__up" onSubmit={handleSubmit}>
      <h1>Join Our Community</h1>
      <div className="formBody">
        <span className="input_group">
          <input
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
          PROCEED
        </button>
      </div>
      <div>
        <p>
          By proceeding you agree to the privacy policy and <br></br> terms of
          service
        </p>
      </div>
    </form>
  );
}

export default Register;
