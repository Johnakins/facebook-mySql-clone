import { useState } from "react";
import "./register.scss";
import {Link} from "react-router-dom"
import axios from "axios"

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })
  const [error, setError] = useState(null)
  const handleChange = (e) => {
    setInputs((prev)=> ({...prev, [e.target.name]: e.target.value}))
  }
  const handleClick = async(e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
    } catch (error) {
      setError(error.response.data)
    }
  }
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Johnakins Social.</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
            dignissimos voluptas magnam officiis alias debitis ducimus nihil
            dolorem quo facere excepturi facilis sequi veritatis, deleniti nam
            qui vitae enim aliquid!
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            {" "}
            <button>Login</button>{" "}
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
            {error && error}
            <button onClick={handleClick}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
