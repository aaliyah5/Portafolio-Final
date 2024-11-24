import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, Soy Aaliyah!</h1>
        <p className={styles.description}>
          Soy una estudiante de desarrollo de software apacionada por aprender, que cursa el 5 semestre de su carerra.. 
          Contactame si te gustaria saber mas!
        </p>
        <a href="" className={styles.contactBtn}>
          Contactame
        </a>
      </div>
      <img
        src={getImageUrl("hero/yo.png")}
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
