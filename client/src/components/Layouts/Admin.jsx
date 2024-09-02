import { FaUser } from "react-icons/fa";
import { MdContacts } from "react-icons/md";
import { FcServices } from "react-icons/fc";
import { IoHomeSharp } from "react-icons/io5";
import "../Navbar.css"
import { NavLink, Outlet } from "react-router-dom";

const Admin = () => {
  return <>
    <section>
      <div className="container">
        <nav>
          <ul>
            <li><NavLink to="/admin/users" className="nav-name"><FaUser />Users</NavLink></li>
            <li><NavLink to="/admin/contacts" className="nav-name"><MdContacts />Contacts</NavLink></li>
            <li><NavLink to="/admin/services" className="nav-name"><FcServices/>Services</NavLink></li>
            <li><NavLink to="/" className="nav-name"><IoHomeSharp/>Home</NavLink></li>
          </ul>
        </nav>
      </div>
    </section>
    <Outlet/>
  </>
}

export default Admin;
