import { useEffect, useState } from "react";
import useAuth from '../store/Data'


const Admin_Contact = () => {

  const [contact, setContact] = useState([]);
  const { gettokenuser } = useAuth();

  const getallcontacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contects" ,
        {
          method : "GET",
        }
      )

      const data = await response.json();
      setContact(data);

      console.log({contact})
    } catch (error) {
      console.log(error)
    }
  }

  const deletecontact = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contects/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: gettokenuser
        },
      });

      if (response.ok) {
        console.log('Contact deleted successfully');
        getallcontacts();
      } else {
        console.error('Failed to delete contact');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getallcontacts()
  },[])
    return (
      <section className="admin-user-section">
        <div className="container admin-header">
          <h1>All Contacts</h1>
        </div>
        <div className="container">
          <table>
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Message</th>
              <th>Delete</th>
            </tr>
            {
              contact.map((curcontact,index) => {
                return (
                  <tr key={index}>
                    <td>{curcontact.username}</td>
                    <td>{curcontact.email}</td>
                    <td>{curcontact.message}</td>
                    <td><button onClick= {() => deletecontact(curcontact._id)}>Delete</button></td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </section>
    )
  }
  
  export default Admin_Contact;