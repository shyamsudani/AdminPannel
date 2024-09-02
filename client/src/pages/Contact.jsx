import { useState } from "react"
import Logo from '../Image/contac.jpeg';
import useAuth from '../store/Data';


const Contact = () => {

  const [contact , setContact] = useState({
    username : "",
    email : "",
    message : ""
  })

  const [userdata , setUserdata] = useState(true);

  const handleContact = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setContact({
      ...contact,
      [name] : value,
    })
  }

  const { user } = useAuth();

  if(userdata && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserdata(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    try {
      const response = await fetch("http://localhost:5000/api/form/contect",
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        }
      );

      if(response.ok){
        alert("Form submitted successfully!");
        setContact({
          username : "",
          email : "",
          message : ""
        });
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <>
  <div className="section contact">
    <div className="container grid grid-col-2">
      <div className="image">
        <img src={Logo} alt="contact" width="500" height="500" />
      </div>
      <div className="contact-form">
        <div className="main-heading mb-3">
          <h1>Contact US</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="details">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Enter Your Name" required autoComplete="off" value={contact.username} onChange={handleContact} />
          </div>
          <div className="details">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter Your Email" required autoComplete="off" value={contact.email} onChange={handleContact} />
          </div>
          <div className="details">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder="Write Your Message" required autoComplete="off" value={contact.message} onChange={handleContact}></textarea>
          </div>
          <button type="submit" className="btn btn-submit">Contact Now</button>
        </form>
      </div>
    </div>
  </div>
  </>
}

export default Contact
