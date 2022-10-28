import React, { useEffect, useState } from "react";
import { Label } from "../radixUI/Label";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/users/userSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message, user } = useSelector(
    (store) => store.user
  );
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      dispatch(loginUser(formData)).unwrap();
    } catch (err) {
      console.log("Failed to login", err);
    } finally {
      setFormData({
        username: "",
        password: "",
      });
    }
  };
  const [status, setStatus] = useState(null);
  useEffect(() => {
    isError ? setStatus(true) : null;
    //reset issucces status
    setTimeout(() => {
      setStatus(null);
      if (isSuccess) navigate("/questions");
    }, 1500);
  }, [user, navigate]);

  return (
    <form className="sign__up" onSubmit={handleSubmit}>
      <h1>Log in and get started</h1>
      <div className="formBody">
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
            autoComplete="new-password"
            type="password"
            id="password"
            className="inputs"
            placeholder="Password"
            value={formData?.password}
            onChange={handleChange}
          ></input>
        </span>
      </div>
      <div className="signup__footer">
        <button className="btn pry-btn" type="submit">
          {isLoading ? "LOGING YOU IN..." : "LOGIN"}
        </button>
      </div>
      <div className="sign-up-terms">
        <p>
          Don't have an account? <br></br>
          <NavLink className="span" to="/home/register">
            Sign up
          </NavLink>
        </p>
      </div>
      {isSuccess ? (
        <div className="form__status active">Login Success</div>
      ) : status && isError ? (
        <div className="form__status">
          Failed To Login check you password or username
        </div>
      ) : null}
    </form>
  );
};

export default Login;
