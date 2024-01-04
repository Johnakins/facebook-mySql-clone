import { useContext } from "react";
import "./login.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const {login} = useContext(AuthContext)

  const handlelogin = () => {
    login()
  } 
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>  
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos voluptas magnam officiis alias debitis ducimus nihil dolorem quo facere excepturi facilis sequi veritatis, deleniti nam qui vitae enim aliquid!
          </p>
          <span>Don't have an account?</span>
          <Link to={"/register"}> <button>Register</button> </Link>    
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={handlelogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login