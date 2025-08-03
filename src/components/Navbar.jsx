import { Flex, Image } from "antd";
import { NavbarItem } from "../elements/NavbarItem";
import {
  NavbarButton,
} from "../elements/Button";
import { Logo } from "../elements/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Flex className={styles.navbarInner} justify="space-around" align="center">
        <div className={styles.logo}>
          <Logo />
        </div>
        <Flex gap={30} justify="center" align="center">
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Gallery</NavbarItem>
          <NavbarItem>Meet the team</NavbarItem>
          <NavbarItem>Contact Us</NavbarItem>
        </Flex>
        <div>
          <NavbarButton>Join Mulearn</NavbarButton>
        </div>
      </Flex>
    </div>
  );
};
