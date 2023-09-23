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

  return <div>Login</div>;
};

export default Login;
