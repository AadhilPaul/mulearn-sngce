import { Navbar } from "../components/Navbar";
import { HeroSection } from "../sections/HeroSection";
import { Divider } from "../components/Divider";
import { NumbersSection } from "../sections/NumbersSection";
import { AboutSection } from "../sections/AboutSection";
import { TeamSection } from "../sections/TeamSection";
import { EventsSection } from "../sections/EventsSection";
import { Mulearn } from "../sections/WhatisMulearn";
import { FooterSection } from "../sections/FooterSection";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
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
    </>
  );
};
