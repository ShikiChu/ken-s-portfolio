import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ken</h1>
        <p className={styles.description}>
        I specialize in full-stack development, proficient in a range of programming languages and frameworks such as React, Express, ASP.NET, Python, and more. My dedication to ongoing learning drives me to consistently deliver top-tier software solutions, contributing to business excellence and success.
        </p>
        <a href="mailto:chu00075@algonquinlive.com" className={styles.contactBtn}>
           Send me an Email
        </a>
      </div>
      <img
        src={getImageUrl("hero/me.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
