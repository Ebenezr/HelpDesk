import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPass } from "../../features/users/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Resetpassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const { isLoading, isSuccess, isError, password_reset_token } = useSelector(
    (store) => store.user
  );
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    token: "",
  });

  //show/hide password
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
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
      const originalPromiseResults = await dispatch(
        resetPass({ ...formData, token: password_reset_token })
      )
        .unwrap()
        .then((data) => {
          console.log(data);
          setStatus(true);
          //navigate to homepage on success
          setTimeout(() => {
            setFormData({
              password: "",
              password_confirmation: "",
            });
            navigate("/home/login");
          }, 1000);
        })
        .catch((err) => {
          setTimeout(() => {
            setFormData({
              password: "",
              password_confirmation: "",
            });
            navigate("/home/forgotpassword");
          }, 1000);
        });

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
      <h1>Reset your Password</h1>
      <div className="formBody">
        <span className="input_group">
          <input
            required
            type="email"
            id="email"
            className="inputs"
            placeholder="Enter your Email"
            value={formData?.email}
            onChange={handleChange}
          ></input>
        </span>
        <span className="input_group">
          <input
            required
            autoComplete="new-password"
            type={passwordType}
            id="password"
            className="inputs"
            placeholder="Password"
            value={formData?.password}
            onChange={handleChange}
          ></input>
          {passwordType === "password" ? (
            <button onClick={togglePassword} type="button">
              <AiFillEyeInvisible className="form--icons" />
            </button>
          ) : (
            <button onClick={togglePassword} type="button">
              <AiFillEye className="form--icons" />
            </button>
          )}
        </span>
        <span className="input_group">
          <input
            required
            autoComplete="new-password"
            type={passwordType}
            id="password_confirmation"
            className="inputs"
            placeholder="Password Confirmation"
            value={formData?.password_confirmation}
            onChange={handleChange}
          ></input>
          {passwordType === "password" ? (
            <button onClick={togglePassword} type="button">
              <AiFillEyeInvisible className="form--icons" />
            </button>
          ) : (
            <button onClick={togglePassword} type="button">
              <AiFillEye className="form--icons" />
            </button>
          )}
        </span>
      </div>
      <div className="signup__footer">
        <button className="btn pry-btn" type="submit">
          {isLoading ? "Requeesting server..." : " PROCEED"}
        </button>
      </div>
      <div className="sign-up-terms">
        <p>
          <NavLink className="span" to="/home/login">
            return back to login
          </NavLink>
        </p>
      </div>
      {isSuccess && status ? (
        <div className="form__status active">Password reset success</div>
      ) : isError && status === false ? (
        <div className="form__status">Failed To reset password try again</div>
      ) : null}
    </form>
  );
};

export default Resetpassword;
