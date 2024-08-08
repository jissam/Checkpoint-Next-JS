import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/app/Home.module.css";

const Page = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>Contact me</h1>
        <p>
          Feel free to send me an email at XX@XXX.com or connect me on my github
        </p>
      </main>
    </div>
  );
};

export default Page;
