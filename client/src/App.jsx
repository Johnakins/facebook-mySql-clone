import {createBrowserRouter, RouterProvider, Outlet, Navigate} from "react-router-dom"
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import NavBar from "./components/nav-bar/NavBar"
import LeftBar from "./components/left-bar/LeftBar"
import RightBar from "./components/right-bar/RightBar"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import "./style.scss"

const App = () => {
  const currentUser = true

  const Layout = () => {
    return (
      <div className="theme-dark">
        <NavBar />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){return <Navigate to={"/login"} />}
    return children
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/profile/:id", element: <Profile /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App