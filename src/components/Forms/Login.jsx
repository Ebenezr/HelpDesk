import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/users/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError } = useSelector((store) => store.user);
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
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const originalPromiseResults = await dispatch(loginUser(formData))
        .unwrap()
        .then((originalPromiseResult) => {
          //navigate to homepage on success
          setTimeout(() => {
            navigate("/questions");
          }, 1000);
        })
        .catch((err) => {});

      return originalPromiseResults;
    } catch (err) {
    } finally {
      //reset store states
      setTimeout(() => {
        dispatch(reset());
        //reset form inputs
        setFormData({
          username: "",
          password: "",
        });
      }, 1000);
    }
  };

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
      ) : isError ? (
        <div className="form__status">
          Failed To Login check you password or username
        </div>
      ) : null}
    </form>
  );
};

export default Login;
