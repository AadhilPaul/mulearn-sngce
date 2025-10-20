import React from "react";
import styles from "./MemberCard.module.css";

export default function MemberCard({ name, role, image }) {
  return (
    <article className={styles.card} aria-label={`${name} — ${role}`}>
      <div className={styles.mediaWrapper}>
        <img src={image} alt={`${name} profile`} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.role}>{role}</p>
      </div>
    </article>
  );
}
