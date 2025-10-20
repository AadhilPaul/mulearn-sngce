import styles from "./HeroSection.module.css";
import { PrimaryButton, SecondaryButton } from "../elements/Button";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  LightBulbIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

const socials = [
  {
    icon: <RocketLaunchIcon className={styles.icon} />,
    pos: { top: "5%", left: "20%" },
  },
  {
    icon: <LightBulbIcon className={styles.icon} />,
    pos: { top: "20%", left: "85%" },
  },
  {
    icon: <CodeBracketIcon className={styles.icon} />,
    pos: { top: "65%", left: "30%" },
  },
];

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.icons}>
          {/* {socials.map((item, i) => (
            <motion.span
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              style={{ top: item.pos.top, left: item.pos.left }}
              animate={{
                y: [0, -10, 0],
                x: [0, 5, 0],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 2 + i * 0.2,
              }}
              className={styles.iconBox}
            >
              {item.icon}
            </motion.span>
          ))} */}
        </div>
        <div className={styles.content}>
          <span className={styles.title}>
            Innovation Begins With Curiosity And Community
          </span>
          <h2 className={styles.collegeName}>Sree Narayana Gurukulam College of Engineering</h2>
          <h3 className={styles.subtitle}>
            At μLearn SNGCE, we're building more than just skills—we're building
            a culture. A place where students share ideas, take on challenges,
            and learn by doing. Whether it's coding, design, or bold new
            projects, we believe growth happens when creativity and teamwork
            come together.
          </h3>
          <div className={styles.buttons}>
            <PrimaryButton>Meet our team</PrimaryButton>
            <SecondaryButton>View our Events</SecondaryButton>
          </div>
        </div>
      </div>
    </>
  );
};
