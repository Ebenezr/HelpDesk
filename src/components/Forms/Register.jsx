import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";

function Register() {
  const [status, setStatus] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
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
            type={passwordType}
            id="password"
            className="inputs"
            placeholder="Password"
            value={formData?.password}
            onChange={handleChange}
          />
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
            id="confirm_password"
            className="inputs"
            placeholder="Password Confirmation"
            value={formData?.confirm_password}
            onChange={handleChange}
          />{" "}
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
        <LoadingButton
          size="large"
          type="submit"
          //onClick={handleClick}
          loadingPosition="start"
          // startIcon={<SaveIcon />}
          loading={isLoading}
          variant="outlined"
        >
          SIGN UP
        </LoadingButton>
        {/* <button className="btn pry-btn" type="submit">
          {isLoading ? "SIGNING YOU UP..." : " PROCEED"}
        </button> */}
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
