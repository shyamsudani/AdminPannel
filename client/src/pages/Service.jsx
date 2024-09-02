import serviceimg from "../Image/services.jpeg";
import useAuth from "../store/Data"

const Service = () => {

  const { services } = useAuth();

  return (
    <section className="service-section">
      <div className="service">
        <div className="service-header">
          <h2>Services</h2>
        </div>
        <div className="grid grid-col-3">
          {
            services.map((service, index) => {
              return (
                <div className="card" key={index}>
                  <div className="img-section">
                    <img src={serviceimg} alt="services provide" width="330" />
                  </div>
                  <div className="service-info grid grid-col-2">
                    <p>{service.provider}</p>
                    <p>{service.price}</p>
                  </div>
                  <div className="service-detiles">
                    <p>{service.service}</p>
                    <p>{service.description}</p>
                  </div>
                </div>
              );
            }
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Service
