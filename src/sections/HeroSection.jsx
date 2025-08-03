import { Flex, Typography } from "antd";
import { Navbar } from "../components/Navbar";
import styles from "./HeroSection.module.css";
import { PrimaryButton, SecondaryButton } from "../elements/Button";

const { Title } = Typography;

export const HeroSection = () => {
  return (
    <>
      <Flex
        className={styles.heroSection}
        vertical
        gap={5}
        justify="center"
        align="center"
      >
        <div className={styles.content}>
          <h1 className={styles.title}>
            Discover.<span>Collaborate.</span> Evolve.
          </h1>
          <p className={styles.subtitle}>
            μLearn at Sree Narayana Gurukulam College of Engineering
          </p>
        </div>
        <Flex gap={30} justify="center" align="center">
          <PrimaryButton>Meet the team</PrimaryButton>
          <SecondaryButton>View our Events</SecondaryButton>
        </Flex>
      </Flex>
    </>
  );
};
