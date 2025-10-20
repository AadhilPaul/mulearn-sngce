import styles from "./FooterSection.module.css";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../elements/Icons";
import { motion } from "framer-motion";

export const FooterSection = () => {
  const socials = [
    { name: "discord", link: "discord.com", src: DiscordIcon },
    { name: "github", link: "github.com", src: GithubIcon },
    { name: "linkedin", link: "linkedin.com", src: LinkedInIcon },
    { name: "instagram", link: "instagram.com", src: InstagramIcon },
  ];
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>

        <div className={styles.content}>
          <div>
            <h1>MULEARN SNG</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae odit, nostrum nesciunt alias voluptatem libero ex,
              vitae laborum illum eos minima beatae provident fugit. Odit
              dolorum unde veritatis ipsa dolor?
            </h5>
          </div>
          <div className={styles.socials}>
            {socials.map((social, index) => {
              const Icon = social.src;
              return (
                <motion.button
                  whileHover={{
                    boxShadow: "none",
                    x: 4,
                    y: 4,
                  }}
                  transition={{
                    duration: 0.1,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  key={index}
                >
                  <Icon className="text-xl" />
                </motion.button>
              );
            })}
          </div>
        </div>
        <div className={styles.links}>
          <h3>Quick Links</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Events</li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>Community</h3>
          <ul>
            <li>Join Discord</li>
            <li>Workshops</li>
            <li>Events</li>
            <li>Mentorship</li>
          </ul>
        </div>
        <div className={styles.links}>
          <h3>Resources</h3>
          <ul>
            <li>Leanring Materials</li>
            <li>Project Ideas</li>
            <li>Tech Talks</li>
            <li>Career Guidance</li>
          </ul>
        </div>
        </div>
        <div className={styles.credit}>
          <hr />
          <p>© 2025 µLearn SNGCE. Made with {'<3'} by Aadhil Paul CT</p>
        </div>
      </footer>
    </>
  );
};
