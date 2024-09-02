import aboutimg from '../Image/about.jpeg'
// import {useState} from 'react'
import useAuth from '../store/Data';

const About = () => {

  const { user } = useAuth();

  return <>

    <section className='hero-section'>
      <div className='container grid grid-col-2'>
        <div className='information'>
          <p className='name-world'>Welcome, {user ? `${user.username} to our website` : `to our website`} </p>
          <h1 className='hading'>Why Choose Us?</h1>
          <p className='name-world'>Expertise: Our team consists of experienced IT professionals who are passionate about staying
            up-to-date with the latest industry trends.
          </p>
          <p className='name-world'>Customization: We understand that every buisness is unique. That's why we create solution that are tailored
            to your specific needs and goals.
          </p>
          <p className='name-world'>Customer-Centric Approach: We prioritize your satisfaction and provide top-notch support to address
            your IT concerms.
          </p>
          <p className='name-world'>Affordability: We offer competitive pricing without compromising on the quality of our service.
          </p>
          <p className='name-world'>Reliability: Count on us to be there when you need us. We're committed to ensuring your
            IT environment is reliable and available 24/7.
          </p>
          <div className="btn btn-group">
            <a href="/contact"><button>Contact Now</button></a>
            <a href="/service" className='second-btn'><button>Learn More</button></a>
          </div>
        </div>
        <div className='hero-imag'>
          <img src={aboutimg} alt='Home' width="500" height="400" />
        </div>
      </div>
    </section>
  </>
}

export default About
