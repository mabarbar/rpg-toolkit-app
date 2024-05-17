import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/dice.svg"
          alt="Next.js Logo"
          width={100}
          height={100}
          priority
        />
        <section className={(styles.center, styles.loginSection)}>
          <p>Please, log in:</p>
          <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" />
          </div>
          <div>
            <label htmlFor="pass">Password: </label>
            <input type="password" id="pass" name="password" required />
          </div>
          <input type="submit" value="Sign in" className={styles.button} />
        </section>
      </div>
    </main>
  );
}
