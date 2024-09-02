import { useState } from 'react';
import Logo from '../Image/register.jpg';
import { useNavigate } from 'react-router-dom';
import  useAuth  from '../store/Data';
import { toast } from 'react-toastify';

const Login = () => {
  const navigat = useNavigate();
  const { StorTokeninls } = useAuth();
  const [user , setUser] = useState({
    email : "",
    password : "",
  })

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name] : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login" , {
        method : "POST",
        headers : {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify(user)
      })
      const res_data = await response.json();

      if(response.ok){
        StorTokeninls(res_data.token)
        setUser({
          email: "",
          password: ""
        })
        toast.success("Logged in Successfully");
        navigat("/");
      } else {
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
      
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }
  return <>

    <div className="section login">
      <div className="container grid grid-col-2">
        <div className="image">
          <img src={Logo} alt="Logo" width={500} height={500} />
        </div>

        {/* Login form */}
        <div className='login-form'>
        <h1 className='main-heading mb-3'>Login Form</h1>

        <form onSubmit={handleSubmit}>
        <div className='details'>
            <lable htmlFor="email">email</lable>
            <input type="email" name="email" placeholder="Enter Your Email" id="email" required autoComplete="off" value={user.email} onChange={handleInput}/>
          </div>
          <div className='details'>
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder="Enter Your Password" id="password" required autoComplete="off" value={user.password} onChange={handleInput}/>
          </div>
          <button type="submit" className="btn btn-submit">Login Now</button>
        </form>
        </div>
      </div>
    </div>
  </>
}

export default Login
