import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavbarItem } from "../elements/NavbarItem";
import { RegularButton } from "../elements/Button";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.navbarInner}>
        <h1>μLearn</h1>

        {/* Desktop Nav */}
        <div className={styles.navbarItems}>
          <Link to="heroSection" smooth={true} duration={600} offset={-50}>
            <NavbarItem>Home</NavbarItem>
          </Link>
          <Link to="aboutSection" smooth={true} duration={600} offset={-50}>
            <NavbarItem>About Us</NavbarItem>
          </Link>
          <Link to="teamSection" smooth={true} duration={600} offset={-50}>
            <NavbarItem>Meet the team</NavbarItem>
          </Link>

          <NavbarItem>Contact Us</NavbarItem>
        </div>

        <div className={styles.joinBtn}>
          <a
            href="https://mulearn.org"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <RegularButton>Join μLearn</RegularButton>
          </a>
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
            <div>
              <div className={styles.menuHeader}>
                <button
                  className={styles.closeBtn}
                  onClick={() => setMenuOpen(false)}
                >
                  ✕
                </button>
              </div>

              <div className={styles.mobileLinks}>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="heroSection"
                  smooth={true}
                  duration={600}
                  offset={-50}
                >
                  <NavbarItem>Home</NavbarItem>
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="aboutSection"
                  smooth={true}
                  duration={600}
                  offset={-50}
                >
                  <NavbarItem>About Us</NavbarItem>
                </Link>
                <Link
                  onClick={() => setMenuOpen(false)}
                  to="teamSection"
                  smooth={true}
                  duration={600}
                  offset={-50}
                >
                  <NavbarItem>Meet the team</NavbarItem>
                </Link>

                <NavbarItem>Contact Us</NavbarItem>
              </div>
            </div>

            <div className={styles.mobileJoinButton}>
              <a
                href="https://mulearn.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <RegularButton>Join μLearn</RegularButton>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
