import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import 'aos/dist/aos.css';
import AOS from "aos";

export const About = () => {
  AOS.init();
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutMe.jpg")}
          alt="Ken"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div data-aos="fade-right" data-aos-duration="1500"  className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I specialize in React and Vue, creating interactive and dynamic interfaces with HTML, CSS, and JavaScript/TypeScript for a seamless user experience.
              </p>
            </div>
          </li>
          <li data-aos="fade-left" data-aos-duration="1500"  className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I leverage ASP.NET, Rails, or Express to craft resilient server-side applications. My expertise includes designing RESTful APIs, proficient database management, and ensuring secure data transmission between server and client, resulting in dependable performance.
              </p>
            </div>
          </li>
          <li data-aos="fade-right" data-aos-duration="1500"  className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Additional Skills</h3>
              <p>
              I am skilled in version control with Git, containerization with Docker, and cloud deployment using AWS and Azure. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
