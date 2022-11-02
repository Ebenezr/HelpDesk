import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../features/users/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { reset } from "../../features/users/userSlice";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
import SendIcon from "@mui/icons-material/Send";
const Login = () => {
  const [status, setStatus] = useState(null);
  const [passwordType, setPasswordType] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError } = useSelector((store) => store.user);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
      const originalPromiseResults = await dispatch(loginUser(formData))
        .unwrap()
        .then((originalPromiseResult) => {
          setStatus(true);
          //navigate to homepage on success
          setTimeout(() => {
            navigate("/questions");
          }, 1000);
        })
        .catch((err) => {
          setStatus(false);
        });
      return originalPromiseResults;
    } catch (err) {
      setStatus(false);
    } finally {
      //reset store states
      setTimeout(() => {
        setStatus(null);
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
          LOGIN
        </LoadingButton>
        {/* <button className="btn pry-btn" type="submit">
          {isLoading ? "LOGING YOU IN..." : "LOGIN"}
        </button> */}
      </div>
      <div className="sign-up-terms">
        <p>
          Don't have an account? <br></br>
          <NavLink className="span" to="/home/register">
            Sign up
          </NavLink>
        </p>
        <p>
          <NavLink className="span" to="/home/forgotpassword">
            forgot password
          </NavLink>
        </p>
      </div>
      {isSuccess && status ? (
        <div className="form__status active">Login Success</div>
      ) : isError && status === false ? (
        <div className="form__status">
          Failed To Login check you password or username
        </div>
      ) : null}
    </form>
  );
};

export default Login;
