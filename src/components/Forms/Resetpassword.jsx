import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetUserPass } from "../../features/users/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";

const Resetpassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, user } = useSelector(
    (store) => store.user
  );
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
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
      const originalPromiseResults = await dispatch(resetUserPass(formData))
        .unwrap()
        .then(() => {
          setStatus(true);
          //navigate to homepage on success
          setTimeout(() => {
            setFormData({
              email: "",
              password: "",
              confirm_password: "",
            });
            navigate("/home/login");
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
      <h1>Reset your Password</h1>
      <div className="formBody">
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
          {isLoading ? "Requeesting server..." : " PROCEED"}
        </button>
      </div>
      <div className="sign-up-terms">
        <p>
          <p>
            <NavLink className="span" to="/home/login">
              return back to login
            </NavLink>
          </p>
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
};

export default Resetpassword;
