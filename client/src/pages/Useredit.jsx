import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import useAuth from '../store/Data';
import { toast } from "react-toastify";


const Useredit = () => {

  const params = useParams()
  const navigate = useNavigate();
  const [user,setUser] = useState({
    username : "",
    email : "",
    phone : "",
  }); 

  const { gettokenuser } = useAuth();
  const Useredited = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`,{
        method: "GET",
        headers: {
          Authorization : gettokenuser,
        },
      });

      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handlercheng = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({...user, [name]: value });
  }

  const handlesubmit = async (e) => {
   e.preventDefault();
   
   const { id } = params;
   const response = await fetch(`http://localhost:5000/api/admin/users/update/${id}`,{
    method : "PATCH",
    headers : {
      "Content-Type": "application/json",
      Authorization : gettokenuser
    },

    body : JSON.stringify(user),
   })
   
   if(response.ok){
    toast.success(" Updated Successful");
    navigate("/admin/users")
   }else{
    toast.error("not Update your details")
   }
   }

  useEffect(() =>{
    Useredited();
  },[])

  return <>
    <section className="container">
      <div className="edit-section">
        <div className="edit-header">
          <h1>User Edit</h1>
        </div>
        <div className="edit-form">
          <form onSubmit={handlesubmit}>
            <div className=" edit">
              <label htmlFor="username">username</label>
              <input type="text" id="username" name="username" placeholder="Edit Your Name" required onChange={handlercheng} value={user.username}/>
            </div>
            <div className="edit">
              <label htmlFor="email">email</label>
              <input type="email" id="email" name="email" placeholder="enter your email" required onChange={handlercheng} value={user.email}/>
            </div>
            <div className="edit">
              <label htmlFor="phone">phone</label>
              <input type="tel" id="phone" name="phone" placeholder="enter your phone number" required onChange={handlercheng} value={user.phone}/>
            </div>
            <button type="submit" className="btn btn-submit">Update Now</button>
          </form>
        </div>
      </div>
    </section>
  </>
}

export default Useredit