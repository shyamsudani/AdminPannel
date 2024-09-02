import { NavLink } from "react-router-dom";
import "./Navbar.css"
import useAuth from "../store/Data";

const Navbar = () => {
  const { isLoggedIn } = useAuth() ;
  return (
    <div className="container">
      <div className="logo-brand">
        <div>Sudani Shyam</div>
      </div>

     <nav>
      <ul>
        <li><NavLink to="/" className="nav-name">Home</NavLink></li>
        <li><NavLink to="/about" className="nav-name">About</NavLink></li>
        <li><NavLink to="/service" className="nav-name">Services</NavLink></li>
        <li><NavLink to="/contact" className="nav-name">Contact</NavLink></li>
        {isLoggedIn ? <li><NavLink to="/logout" className="nav-name" >Logout</NavLink></li>
        : (
        <>
        <li><NavLink to="/register" className="nav-name">Register</NavLink></li>
        <li><NavLink to="/login" className="nav-name">Login</NavLink></li>
        </>)
         }
      </ul>
     </nav>
    </div>
  )
}

export default Navbar
