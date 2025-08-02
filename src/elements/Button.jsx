import styles from "./Button.module.css";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export const PrimaryButton = ({ children, ...rest }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.button
      onMouseEnter={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
      whileHover={{
        boxShadow: "var(--shadow)",
        y: -2
      }}
      whileTap={{
        scale: 0.98,
      }}
      className={styles.primaryButton}
    >
      <motion.span animate={{ x: isHover ? 0 : 10 }}>{children}</motion.span>
      <motion.span
        animate={{ x: isHover ? 0 : 50 }}
        transition={{ duration: 0.2}}
        className={styles.icon}
      >
        <ArrowTopRightOnSquareIcon />
      </motion.span>
    </motion.button>
  );
};

export const SecondaryButton = ({ children, ...rest }) => {
  return (
    <motion.button
      whileHover={{ backgroundColor: "var(--bg-dark)", border: '2px solid var(--border)', y: -2, boxShadow: "var(--shadow)" }}
      whileTap={{ scale: 0.98 }}
      className={styles.secondaryButton}
    >
      {children}
    </motion.button>
  );
};

