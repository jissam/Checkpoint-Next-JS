import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/app/Home.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>About me</h1>
        <p>I am a software engineer with expertises in JS</p>
      </main>
    </div>
  );
};

export default About;
