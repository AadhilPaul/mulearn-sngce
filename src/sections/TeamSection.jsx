import { Title } from "../elements/Title";
import { motion } from "framer-motion";
import Adish from "../assets/images/members/Adish K T.jpg";
import Ajay from "../assets/images/members/Ajay Krishna P R.jpg";
import Arnav from "../assets/images/members/ARNAV.jpg";
import Benson from "../assets/images/members/Benson B Varghese_.jpg";
import Bhavana from "../assets/images/members/Bhavana S Nair_.jpg";
import Devika from "../assets/images/members/Devika Subhash.jpg";
import Elizabeth from "../assets/images/members/Elizabeth Reji_.webp";
import Gautam from "../assets/images/members/Gautam.jpg";
import Giana from "../assets/images/members/GIANA DON.jpg";
import Gifton from "../assets/images/members/Gifton Shibu.jpg";
import Joseph from "../assets/images/members/Joseph Liyon.jpg";
import Malavika from "../assets/images/members/malavika.jpg";
import Dhakshu from "../assets/images/members/dhakshu.jpg";
import MemberCard from "../components/MemberCard";
import LeadCard from "../components/LeadCard";
import styles from "./TeamSection.module.css";

export const TeamSection = (props, ref) => {
  const leads = [
    { name: "Dhakshu Shivan", role: "Lead Enabler", src: Dhakshu },
    { name: "Gifton Shibu", role: "Campus Lead", src: Gifton },
  ];
  const team = [
    { name: "Malavika Pangavoor", role: "Campus Co-Lead", src: Malavika },
    { name: "Benson B Varghese", role: "Creative Lead", src: Benson },
    { name: "Ajay Krishna P R", role: "Creative Co-Lead", src: Ajay },
    { name: "Elizabeth Reji", role: "Tech Lead", src: Elizabeth },
    { name: "Adish K T", role: "Tech Co-Lead", src: Adish },
    { name: "Giana Don", role: "Media Lead", src: Giana },
    { name: "Devika Subhash", role: "Design Lead", src: Devika },
    { name: "Bhavana S Nair", role: "Content Lead", src: Bhavana },
    { name: "Joseph Liyon PT", role: "Web Development IG Lead", src: Joseph },
    { name: "Gautam Deepak", role: "Cyber IG Lead", src: Gautam },
    { name: "Arnav Jagadeesh", role: "Data Science IG Lead", src: Arnav },
  ];
  return (
    <motion.div
    id="teamSection"
      className={styles.about}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Title>Meet Our Team</Title>
      <section className={styles.leadGrid}>
        {leads.map((lead, j) => (
          <LeadCard
            key={j}
            name={lead.name}
            role={lead.role}
            image={lead.src}
          />
        ))}
      </section>
      <section className={styles.grid}>
        {team.map((member, i) => (
          <MemberCard
            key={i}
            name={member.name}
            role={member.role}
            image={member.src}
          />
        ))}
      </section>
    </motion.div>
  );
};
