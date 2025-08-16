import styles from "./HeroSection.module.css";
import { PrimaryButton, SecondaryButton } from "../elements/Button";
import image from "../assets/images/hero3.jpg";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Building a <span>Peer-Learning</span> Culture Together.
            {/* Discover. <span>Collaborate. </span>Evolve. */}
          </h1>
          <h3 className={styles.subtitle}>
            μLearn at Sree Narayana Gurukulam College of Engineering
          </h3>
          <div className={styles.buttons}>
            <PrimaryButton>Meet the team</PrimaryButton>
            <SecondaryButton>View our Events</SecondaryButton>
          </div>
        </div>
        <div className={styles.images}>
          <motion.img
            src={image}

            animate={{ rotate: 10}}
          />
        </div>
      </div>
    </>
  );
};
