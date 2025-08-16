import { Navbar } from "../components/Navbar";
import { EventsSection } from "../sections/EventsSection";
import { HeroSection } from "../sections/HeroSection";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <Navbar />
        <HeroSection />
        <EventsSection/>
      </div>
    </>
  );
};
