import styles from "./HeroSection.module.css";
import { PrimaryButton, SecondaryButton } from "../elements/Button";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";

export const HeroSection = () => {
  return (
    <>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Building a <span>Peer-Learning</span> Culture Together.
            {/* Discover. <span>Collaborate. </span>Evolve. */}
          </h1>
          <h3 className={styles.subtitle}>
            μLearn at Sree Narayana Gurukulam College of Engineering
          </h3>
        </div>
        <div className={styles.buttons}>
          <PrimaryButton>
            Meet the team
            <ArrowRightCircleIcon className={styles.icon} />
          </PrimaryButton>
          <SecondaryButton>View our Events</SecondaryButton>
        </div>
      </div>
    </>
  );
};
