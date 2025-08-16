import styles from "./AboutSection.module.css";
import image1 from '../assets/images/hero2.jpeg'

export const AboutSection = () => {
  return (
    <div className={styles.about}>
      <h3 className={styles.title}>ABOUT US</h3>
      <div className={styles.aboutBox}>
        <div className={styles.content}>
          <p>
            At μLearn College Chapter, we believe learning should be exciting,
            not just another task. We’re a student-led community that thrives on
            curiosity, collaboration, and creativity. Through coding sprints,
            design challenges, and peer-learning sessions, we create
            opportunities to explore and grow together. More than just skills,
            we focus on building confidence, connections, and a culture of
            teamwork. Whether you’re just starting out or ready to work on bold
            ideas, μLearn is the space where passion meets possibility
          </p>
        </div>
        <div className={styles.images}>
          <img src={image1}/>
        </div>
      </div>
    </div>
  );
};
