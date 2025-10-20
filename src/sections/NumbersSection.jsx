import { useState } from "react";
import { motion } from "framer-motion";
import { NumberCard } from "../components/NumberCard";
import { Title } from "../elements/Title";
import styles from "./NumbersSection.module.css";

export const NumbersSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const numbers = [
    { number: 160, title: "Students Enrolled", color: "var(--danger)" },
    { number: 25, title: "Learning Circles", color: "var(--info)" },
    { number: 5, title: "Interest Groups", color: "var(--success)" },
    { number: 45000, title: "Karma Mined", color: "var(--warning)" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{once: true}}
      className={styles.numbersSection}
    >
      <Title>Our Numbers</Title>
      <div className={styles.cards}>
        {numbers.map((item, index) => (
          <NumberCard key={index} number={item.number} title={item.title} />
        ))}
      </div>
    </motion.div>
  );
};
