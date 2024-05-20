import React from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  Aos.init();
  return (
    <div data-aos="flip-right" data-aos-duration="1500" className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
      {demo !== "" ? (
        <a href={demo} className={styles.link}>
          Demo
        </a>
      ) : (
        <span className={styles.disabledLink}>
          Demo
        </span>
      )}
       {source !== "" ? (
        <a href={source} className={styles.link}>
          Source
        </a>
      ) : (
        <span className={styles.disabledLink}>
          Source
        </span>
      )}
      </div>
    </div>
  );
};
