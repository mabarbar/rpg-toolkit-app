import styles from "./rollTheDice.module.css";

export const RollTheDice = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.cta}>Roll the dice</h2>
      <div className={styles.diceInnerContainer}>
        <button className={styles.diceTile}>D4</button>
        <button className={styles.diceTile}>D6</button>
        <button className={styles.diceTile}>D8</button>
        <button className={styles.diceTile}>D10</button>
        <button className={styles.diceTile}>D12</button>
        <button className={styles.diceTile}>D20</button>
      </div>
      <button className={styles.button}>Roll</button>
      <div className={styles.diceInnerContainer}>
        <span className={styles.sumText}>Sum:</span>
      </div>
    </section>
  );
};
