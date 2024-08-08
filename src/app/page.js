import Navbar from "@/components/Navbar";
import styles from "@/app/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to my Portfolio</h1>
        <p>My name is XXXXX XXXXX</p>
      </main>
    </div>
  );
}
