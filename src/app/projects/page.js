import Navbar from "@/components/Navbar";
import React from "react";
import styles from "@/app/Home.module.css";

const Projects = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>My projects</h1>
        <ul>
          <li>Project 1: Description project 1</li>
          <li>Project 2: Description project 2</li>
          <li>Project 3: Description project 3</li>
          <li>Project 4: Description project 4</li>
          <li>Project 5: Description project 5</li>
        </ul>
      </main>
    </div>
  );
};

export default Projects;
