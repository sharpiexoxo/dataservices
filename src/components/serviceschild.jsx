import React from "react";
import { useState, useEffect } from "react";
import { ViborgServicesAPI } from "../helpers/servicescapi";

const Services = () => {
  const [services, setServices] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);

    ViborgServicesAPI()
      .then((data) => {
        console.log(data);

        setServices(data);
        setError(false);
      })
      .catch((error) => {
        console.log("404 - Der er sket en fejl");
        setError(true);
        setServices();
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {services && (
        <div className="services-container">
          <div className="service-info">
            <h1>Vores ydelser</h1>
            <hr className="headline-break" />
            <p>Herunder en overigt over alle vores services.</p>
            <p>
              Hvis du måtte have flere spørgsmål, er du velkommen til at
              kontakte os.
            </p>
          </div>

          <div className="services-content">
            {services.map((s, i) => (
              <div key={i}>
                <img src={`http://localhost:5023/images/${s.image}`} alt="" />
                <h2>{s.title}</h2>
                <p>{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
