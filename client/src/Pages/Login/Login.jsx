import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useLoginUserMutation } from "../redux/api/authAPI";
import { setUser } from "../redux/reducers/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading }] = useLoginUserMutation();

  const handleLogin = async () => {
    try {
      const response = await login({ username, password }).unwrap();
      dispatch(setUser(response));
    } catch (err) {
      console.log(err);
    }
  };

  const googleLogin = useGoogleLogin({
    flow: "auth-code",
    onSuccess: (codeResponse) => {
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
        <img src={image} alt="" />
      </div>
      <div className="login-right">
        <h1 className="login-header">Log In</h1>
        <form>
          <div className="floating-label-group">
            <input
              type="text"
              className="login-name"
              required
              autoCapitalize="true"
            />
            <span className="floating-label">Name</span>
          </div>

          <div className="floating-label-group">
            <input type="email" className="login-email" required />
            <span className="floating-label">Email</span>
          </div>

          <span className="forgot">Forgot password?</span>
          <button className="login-submit">Login</button>
        </form>
        <div class="container">
          <hr class="hr-text" data-content="or better continue with" />
        </div>
        <div className="login-google">
          <GoogleIcon /> Google
        </div>
      </div>
    </div>
  );
};

export default Login;
