import styles from "./EventsSection.module.css";
import { motion } from "framer-motion";
import { useState } from "react";

export const EventsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const events = [
    { title: "Event One", color: "var(--danger)" },
    { title: "Event Two", color: "var(--info)" },
    { title: "Event Three", color: "var(--success)" },
    // { title: "Event Four", color: "var(--warning)" },
  ];
  return (
    <div className={styles.eventsSection}>
      <h3 className={styles.title}>OUR EVENTS</h3>
      <div className={styles.events}>
        {events.map((event, index) => (
          <motion.div
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            animate={{
              // scale: hoveredIndex === index ? 1.02 : 1,
              x: hoveredIndex === index ? 4 : 0,
              y: hoveredIndex === index ? 4 : 0,
              boxShadow: hoveredIndex === index ? "none" : "var(--shadow)", // use a real val
            }}
            transition={{
              x: { type: "spring", stiffness: 500, damping: 30 },
              y: { type: "spring", stiffness: 500, damping: 30 },
              boxShadow: { duration: 0.2 },
            }}
            key={index}
            className={styles.eventCard}
          >
            <motion.div
              className={styles.img}
              style={{ backgroundColor: event.color }}
            />
            <div className={styles.eventTitle}>{event.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
