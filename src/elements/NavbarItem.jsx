import { useState } from "react";
import styles from "./NavbarItem.module.css";
import { motion } from "framer-motion";

export const NavbarItem = ({ children, ...rest }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
      className={styles.navItem}
      animate={{
        padding: 8,
        backgroundColor: isHover ? "#DAF5f0" : "var(--bg)",
      }}
    >
      {children}
    </motion.div>
  );
};
