import { Navbar } from "../components/Navbar";
import { HeroSection } from "../sections/HeroSection";
import { Divider } from "../components/Divider";
import { NumbersSection } from "../sections/NumbersSection";
import { AboutSection } from "../sections/AboutSection";
import { TeamSection } from "../sections/TeamSection";
import { EventsSection } from "../sections/EventsSection";
import { Mulearn } from "../sections/WhatisMulearn";
import { FooterSection } from "../sections/FooterSection";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // simulate loading
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            className="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="progress-bar">
              <div className="fill" />
            </div>
            <p>Loading μLearn...</p>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar />
            <div className={styles.heroContainer}>
              <HeroSection />
              <Divider />
              <Mulearn />
              <AboutSection />
              <NumbersSection />
              <TeamSection />
              <EventsSection />
            </div>
            <FooterSection />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
