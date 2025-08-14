import { NavbarItem } from "../elements/NavbarItem";
import { RegularButton } from "../elements/Button";
import { Logo } from "../elements/Logo";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <h1>μLearn</h1>
        <div className={styles.navbarItems}>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Gallery</NavbarItem>
          <NavbarItem>Meet the team</NavbarItem>
          <NavbarItem>Contact Us</NavbarItem>
          <RegularButton>Join Mulearn</RegularButton>
        </div>
      </div>
    </div>
  );
};
