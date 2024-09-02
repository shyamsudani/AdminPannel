import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Register from './pages/Register';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './pages/Error';
import Logout from './pages/Logout';
import  Admin_User from './pages/Admin_User';
import  Admin_Contact from './pages/Admin_Contact';
import Admin_Service  from './pages/Admin_Service';
import Admin from './components/Layouts/Admin';
import Useredit from './pages/Useredit';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />} />
      <Route path="/admin" element={<Admin />} >
        <Route path="users" element={<Admin_User />} />
        <Route path="contacts" element={<Admin_Contact />} />
        <Route path="services" element={<Admin_Service />} />
        <Route path="useredit/:id" element={<Useredit />} />
      </Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
