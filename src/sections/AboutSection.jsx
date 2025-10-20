import {
  RegularButton,
  SecondaryButton,
  PrimaryButton,
} from "../elements/Button";
import styles from "./AboutSection.module.css";
import { motion } from "framer-motion";
import { Title } from "../elements/Title";
import poster from "../assets/images/posters/poster8.jpeg";

export const AboutSection = () => {
  return (
    <motion.div
      className={styles.about}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Title>About us</Title>
      <div className={styles.aboutBox}>
        <div className={styles.content}>
          <span>
            At μLearn SNGCE, we believe learning should be more than just
            another task on your to-do list — it should be exciting, inspiring,
            and fun. We are a student-led community that thrives on curiosity,
            collaboration, and creativity, giving everyone the chance to explore
            their interests while building skills that truly matter.
          </span>
          <br />
          <br />
          <span>
            Through coding sprints, design challenges, and peer-learning
            sessions, we create opportunities to grow together in a supportive
            environment. More than just technical skills, we focus on building
            confidence, meaningful connections, and a culture of teamwork.
            Whether you're just starting your journey or ready to dive into bold
            new ideas, μLearn is the space where passion meets possibility.
          </span>
          <br />
          <RegularButton>Join Our Discord</RegularButton>
        </div>
        <div className={styles.images}>
          <img src={poster} alt="" />
        </div>
      </div>
    </motion.div>
  );
};
