import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPass } from "../../features/users/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";

const Forgotpassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError } = useSelector((store) => store.user);
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
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
      const originalPromiseResults = await dispatch(forgotPass(formData))
        .unwrap()
        .then((data) => {
          setStatus(true);
          //navigate to homepage on success
          setTimeout(() => {
            setFormData({
              email: "",
            });
            navigate("/home/resetpassword");
          }, 1000);
        })
        .catch((err) => {
          setStatus(false);
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
      <h1>Forgot your Password</h1>
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
        <div className="form__status active">Account Found</div>
      ) : isError && status === false ? (
        <div className="form__status">
          Email address not found. Please check and try again.
        </div>
      ) : null}
    </form>
  );
};

export default Forgotpassword;
