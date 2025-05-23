import React from "react";
import styles from "./Serviços.module.css";

function Serviços() {
  const services = [
    { id: 1, name: "Serviço 1 Placeholder" },
    { id: 2, name: "Serviço 2 Placeholder" },
    { id: 3, name: "Serviço 3 Placeholder" },
    { id: 4, name: "Serviço 4 Placeholder" },
    { id: 5, name: "Serviço 5 Placeholder" },
    { id: 6, name: "Serviço 6 Placeholder" },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>SERVIÇOS</h2>
      <div className={styles.servicesGrid}>
        {services.map((service) => (
          <div key={service.id} className={styles.serviceItem}></div>
        ))}
      </div>
    </section>
  );
}

export default Serviços;
