import { NavLink } from "react-router-dom"


const Error = () => {
  return <>
  <section id="error-page" className="eror-page"> 
    <div className="container error">
        <h2 className="header">404</h2>
        <h4>Sorry! Page not found</h4>
        <p>Oops! It like the page you're trying to access dosen't exist.
            If you believe there's an issue, feel free to report it, and we'll look into it.
        </p>
        <div className="btns">
            <NavLink to="/" className="problem">return home</NavLink>
            <NavLink to="/contact" className="problem">report problem</NavLink>
        </div>
    </div>
  </section>
  </>
}

export default Error
