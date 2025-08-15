import styles from "./Button.module.css";
import { motion } from "framer-motion";

export const PrimaryButton = ({ children, ...rest }) => {
  return (
    <motion.button
      whileHover={{
        boxShadow: "none",
        x: 4,
        y: 4,
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.primaryButton}
    >
      {children}
    </motion.button>
  );
};

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <motion.button
      whileHover={{
        boxShadow: "none",
        x: 4,
        y: 4,
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.secondaryButton}
    >
      {children}
    </motion.button>
  );
};

export const RegularButton = ({ children, ...rest }) => {
  return (
    <motion.button
      whileHover={{
        boxShadow: "none",
        x: 4,
        y: 4,
      }}
      transition={{
        duration: 0.1,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.regularButton}
    >
      {children}
    </motion.button>
  );
};
