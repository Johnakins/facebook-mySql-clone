import { useContext, useState } from "react";
import "./login.scss"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const navigate = useNavigate()
  const {login} = useContext(AuthContext)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlelogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs)
      navigate("/")
    } catch (error) {
      setError(error.response.data)
    } 
  } 
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            dignissimos voluptas magnam officiis alias debitis ducimus nihil
            dolorem quo facere excepturi facilis sequi veritatis, deleniti nam
            qui vitae enim aliquid!
          </p>
          <span>Don't have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handlelogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login