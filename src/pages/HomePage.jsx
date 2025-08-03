import { Navbar } from "../components/Navbar";
import { HeroSection } from "../sections/HeroSection";
import styles from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <Navbar />
        <HeroSection />
      </div>
    </>
  );
};
