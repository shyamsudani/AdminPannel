import homeimg from '../Image/home.jpg';
import information from '../Image/info.jpeg'

const Home = () => {
  return <>

    <main>
      <section className='hero-section'>
        <div className='container grid grid-col-2'>
          <div className='information'>
            <p className='name-world'>We are the world Best IT Company</p>
            <h1 className='hading'>Welcome to shyam sudani</h1>
            <p className='name-world'>This is a sample website for your business. Feel free to customize it to your needs.</p>
            <div className="btn btn-group">
              <a href="/contact"><button>Contact Now</button></a>
              <a href="/service" className='second-btn'><button>Learn More</button></a>
            </div>
          </div>
          <div className='hero-image'>
            <img src={homeimg} alt='Home' width="500" height="400" />
          </div>
        </div>
      </section>

      <section className='midle-section'>
        <div className='grid grid-col-4 main-info'>
          <div className='info'>
            <h2>50+</h2>
            <p>Registered Companies</p>
          </div>
          <div className='info'>
            <h2>100000+</h2>
            <p>Happy Client</p>
          </div>
          <div className='info'>
            <h2>500+</h2>
            <p>Well Known Developers</p>
          </div>
          <div className='info'>
            <h2>24/7</h2>
            <p>Servcie</p>
          </div>
        </div>
      </section>

      <section className='hero-section'>
        <div className='container grid grid-col-2'>
          <div className='hero-image'>
            <img src={information} alt='Home' width="500" height="400" />
          </div>
          <div className='information'>
            <p className='name-world'>We are the world Best IT Company</p>
            <h1 className='hading'>Welcome to shyam sudani</h1>
            <p className='name-world'>This is a sample website for your business. Feel free to customize it to your needs.</p>
            <div className="btn btn-group">
              <a href="/contact"><button>Contact Now</button></a>
              <a href="/service"><button>Learn More</button></a>
            </div>
          </div>
        </div>
      </section>
    </main>

  </>
}

export default Home;
