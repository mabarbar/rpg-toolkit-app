import { FaPause } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { FaDragon } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaHorse } from "react-icons/fa";
import { MdCastle } from "react-icons/md";
import { FaCrow } from "react-icons/fa";
import { FaSkullCrossbones } from "react-icons/fa";
import { FaDungeon } from "react-icons/fa";
import styles from "./soundboard.module.css";

export const Soundboard = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.cta}>Soundboard</h2>
      <div className={styles.tileContainer}>
        <button className={styles.diceTile}>
          <FaFireAlt />
        </button>
        <button className={styles.diceTile}>
          <FaDragon />
        </button>
        <button className={styles.diceTile}>
          <FaTree />
        </button>
        <button className={styles.diceTile}>
          <FaHorse />
        </button>
      </div>
      <div className={styles.tileContainer}>
        <button className={styles.diceTile}>
          <MdCastle />
        </button>
        <button className={styles.diceTile}>
          <FaCrow />
        </button>
        <button className={styles.diceTile}>
          <FaSkullCrossbones />
        </button>
        <button className={styles.diceTile}>
          <FaDungeon />
        </button>
      </div>
      <p className={styles.status}>Now playing: Calm Forest</p>
      <button className={styles.button}>
        <FaPause />
      </button>
    </section>
  );
};
