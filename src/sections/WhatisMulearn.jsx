import styles from './WhatisMulearn.module.css'

export const Mulearn = () => {
  return (
    <div >
      <h2>What is MuLearn?</h2>
      <iframe
      className={styles.video}
        src="https://www.youtube.com/embed/ehdSEL_s050?si=QKn4mAgqM26NEAC_"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};
