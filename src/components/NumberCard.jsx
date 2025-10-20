import styles from "./NumberCard.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export const NumberCard = ({ number, title }) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <motion.div
      onMouseEnter={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
      whileHover={{
        x: -4,
        y: -4,
        rotate: 2
      }}
      transition={{
        duration: 0.2,
      }}
      className={styles.card}
    >
      <div className={styles.number}>{number}+</div>
      <div className={styles.title}>{title}</div>
    </motion.div>
  );
};
