import { Flex, Image } from "antd";
import { NavbarButton } from "../elements/NavbarButton";
import { PrimaryButton, SecondaryButton } from "../elements/Button";
import { Logo } from "../elements/Logo";
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <Flex justify="space-around" align="center">
      <div>
        <Logo/>
      </div>
      <Flex gap={30} justify="center" align="center">
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>About Us</NavbarButton>
        <NavbarButton>Gallery</NavbarButton>
        <NavbarButton>Team</NavbarButton>
        <NavbarButton>Contact Us</NavbarButton>
      </Flex>
      <div>
        <PrimaryButton>Join Mulearn</PrimaryButton>
      </div>
    </Flex>
    </div>
  );
};
