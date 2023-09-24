import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch, useSelector } from "react-redux";
import { useLoginUserMutation } from "../../redux/api/authAPI";
import { setUser } from "../../redux/reducers/userSlice";
import image from "../../assets/register.svg";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginUserMutation();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ username, password }).unwrap();
      dispatch(setUser(response));
      console.log(user);
    } catch (err) {
      console.log(err);
    }
    setPassword("");
    setUsername("");
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      axios({
        method: "POST",
        url: "http://localhost:8000/users/google/",
        data: {
          code: codeResponse.code,
        },
      })
        .then((response) => {
          dispatch(setUser(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={image} alt="Register Image" />
      </div>
      <div className="login-right">
        <h1 className="login-header">Log In</h1>
        <form onSubmit={handleLogin}>
          <div className="floating-label-group">
            <input
              type="text"
              className="login-name"
              required
              autoCapitalize="true"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="floating-label">Username</span>
          </div>

          <div className="floating-label-group">
            <input
              type="password"
              className="login-email"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="floating-label">Password</span>
          </div>

          <span className="forgot">Forgot password?</span>
          <button className="login-submit">
            {isLoading ? <>Logging in...</> : <>Login</>}
          </button>
        </form>
        <div className="container">
          <hr className="hr-text" data-content="or better continue with" />
        </div>
        <div className="login-btn-container">
          <div className="login-google" onClick={googleLogin}>
            <GoogleIcon /> Google
          </div>
          <div className="login-google" onClick={googleLogin}>
            <AppleIcon /> Apple
          </div>
          <div className="login-google" onClick={googleLogin}>
            <LinkedInIcon /> LinkedIn
          </div>
        </div>
        <span className="no-account">
          Don&apos;t have an account? <Link className="link">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
