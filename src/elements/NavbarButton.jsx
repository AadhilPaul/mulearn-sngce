import { useState } from "react";
import styles from "./NavbarButton.module.css";
import { motion } from "framer-motion";

export const NavbarButton = ({ children, ...rest }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
      whileHover={{scale: 1.05}}
      className={styles.navItem}
    >
      <motion.span
      whileHover={{color: "var(--primary)"}}
      transition={{ duration: 0.3 }}
      className={styles.title}>{children}</motion.span>
      <motion.div
        transition={{ duration: 0.3, ease: "easeInOut" }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHover ? 1 : 0 }}
        className={styles.line}
      ></motion.div>
    </motion.div>
  );
};
