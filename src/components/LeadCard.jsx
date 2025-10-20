import styles from "./LeadCard.module.css";

export default function LeadCard({ name, role, image }) {
  return (
    <div className={styles.leadCard}>
      <img src={image} alt={name} className={styles.leadImg} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
    </div>
  );
};
