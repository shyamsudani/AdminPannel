import { useState } from 'react';
import Logo from '../Image/register.jpeg';
import { useNavigate } from 'react-router-dom';
import useAuth  from '../store/Data';
import { toast } from 'react-toastify';


const Register = () => {
  const navigat = useNavigate()
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({...user, [name]: value, })
  }

  const { StorTokeninls } = useAuth() ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)

      });

      console.log(response);
      const res_data = await response.json();

      if(response.ok){
        StorTokeninls(res_data.token)
        console.log("response deta is " , res_data.token);
        setUser({username: "", email: "", phone: "", password: "",})
        toast.success("Registration Successful");
        navigat("/login");
      }else{
        console.log("Error in registering user", res_data.extraDetails);
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return <>
  <div className="section registration">
    <div className="container grid grid-col-2">
      <div className="image">
        <img src={Logo} alt="Logo"  width={500} height={530}/>
      </div>

      {/* registration form */}

      <div className='registation-form'>
        <h1 className='main-heading mb-3'>Registration Form</h1>

        <form onSubmit={handleSubmit}>
          {/* form fields */}
          <div className="details">
            <label htmlFor="username">username</label>
            <input type="text" name="username" placeholder="Enter Your Name" id="username" required autoComplete="off" value={user.username} onChange={handleInput}/>
          </div>
          <div className="details">
            <lable htmlFor="email">email</lable>
            <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
          </div>
          <div className="details">
            <label htmlFor="phone">phone</label>
            <input type="number" name="phone" placeholder="Enter Your Number" id="phone" required autoComplete="off" value={user.phone} onChange={handleInput}/>
          </div>
          <div className="details">
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder="Enter Your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
          </div>

          <button type="submit" className="btn btn-submit">Register Now</button>
        </form>
      </div>
    </div>
  </div>
  </>
}

export default Register
