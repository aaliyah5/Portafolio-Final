import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Historia</h3>
              <p>
                Mi nombre es Aaliyah Gomez Romero. Nací en Envigado Antioquia el 25 de septiembre del 2005, tengo 19 años.
              </p>
            </div>
          </li>
        
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Pasiones</h3>
              <p>
                Soy apasionada con el diseño de paginas web, la creacion de ideas y las animales. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Sueños</h3>
              <p>
                Mi sueño es crear una aplicación para la ayuda de la conservacion de fauna. Ademas sueño con crear empresas para ayudar personas de excasos recursos. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
