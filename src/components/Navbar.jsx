import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarItem } from "../elements/NavbarItem";
import { RegularButton } from "../elements/Button";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <h1>μLearn</h1>

        {/* Desktop Nav */}
        <div className={styles.navbarItems}>
          <NavbarItem>Home</NavbarItem>
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Gallery</NavbarItem>
          <NavbarItem>Meet the team</NavbarItem>
          <NavbarItem>Contact Us</NavbarItem>
        </div>

        {/* Right side: Join button + hamburger (mobile) */}
        {/* Hamburger mobile */}
        <div className={styles.hamburgerWrapper}>
          <div className={styles.hamburger} onClick={() => setMenuOpen(true)}>
            <div />
            <div />
            <div />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setMenuOpen(false)}
            >
              ✕
            </button>

            <div className={styles.mobileLinks}>
              <NavbarItem>Home</NavbarItem>
              <NavbarItem>About Us</NavbarItem>
              <NavbarItem>Gallery</NavbarItem>
              <NavbarItem>Meet the team</NavbarItem>
              <NavbarItem>Contact Us</NavbarItem>
            </div>

            <div className={styles.mobileJoinButton}>
              <RegularButton>Join μLearn</RegularButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
