import styles from 'components/timeSet.module.css';

const TimeSet = () => {
  return (
    <div className={styles.cards}>
      <div className={styles.card}>
        <p>1</p>
      </div>
      <div className={styles.card}>
        <p>5</p>
      </div>
      <div className={styles.card}>
        <p>9</p>
      </div>
      <div className={styles.card}>
        <p>5</p>
      </div>
      <div className={styles.card}>
        <p>9</p>
      </div>
      <div className={styles.card}>
        <p>N</p>
      </div>
    </div>
  );
};

export default TimeSet;
