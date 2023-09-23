import axios from "axios";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/userSlice";

const Login = () => {
  const dispatch = useDispatch();

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
