import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import useAuth from "../store/Data";

const Admin_User = () => {

  const { gettokenuser } = useAuth();
  const [ user, setUser ] = useState([]);
  const nevigate = useNavigate();
  
  const getalluserdata = async () => {

    const response = await fetch("http://localhost:5000/api/admin/users", {
      method: "GET",
      headers: {
        Authorization: gettokenuser,
      },
    }
    );
    const data = await response.json();
    setUser(data);
  }

  const deletuser = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: gettokenuser,
        },
      }
      );

      if (response.ok) {
        getalluserdata();
      }

      const deletedata = await response.json();

      console.log(`user deleted ${(deletedata)}`);

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getalluserdata();
  }, [])

  return <>
    <section className="admin-user-section">
      <div className="container admin-header">
        <h1>All Users</h1>
      </div>
      <div className="container">
        <table>
          <tr>
            <th>Username</th>
            <th>EmailID</th>
            <th>Phone NO.</th>
            <th>Upadate</th>
            <th>Delete</th>
          </tr>
          {
            user.map((curUser, index) => {
              return (
                <tr key={index}>
                  <td>{curUser.username}</td>
                  <td>{curUser.email}</td>
                  <td>{curUser.phone}</td>
                  <td><button onClick={() =>nevigate(`/admin/useredit/${curUser._id}`)}>Edit</button></td>
                  <td><button onClick={() => deletuser(curUser._id)}>Delete</button></td>
                </tr>
              )
            })

          }
        </table>
      </div>
    </section>
  </>
}

export default Admin_User;