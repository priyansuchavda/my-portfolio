"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Full Stack Developer building <span className={styles.accent}>scalable web & mobile applications</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.subtext}
        >
          I design and develop real-world products using Flutter, Django, and React — handling everything from backend APIs to responsive UI.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.ctas}
        >
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={styles.right}
      >
        <div className={styles.visualContainer}>
          {/* Mock Code Editor */}
          <div className={styles.codeEditor}>
            <div className={styles.editorHeader}>
              <div className={styles.dots}><span></span><span></span><span></span></div>
              <div className={styles.fileName}>developer.dart</div>
            </div>
            <div className={styles.codeContent}>
              <pre>
                <code>
{`class Developer {
  final String name = 'Priyanshu';
  final List<String> skills = [
    'Flutter', 'React', 'Django'
  ];

  void buildProduct() {
    print('Creating something awesome...');
  }
}`}
                </code>
              </pre>
            </div>
          </div>

          {/* Floating Stats */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className={`${styles.statCard} ${styles.stat1}`}
          >
            <div className={styles.statIcon}>🚀</div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Projects Built</span>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className={`${styles.statCard} ${styles.stat2}`}
          >
            <div className={styles.statIcon}>📱</div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>5+</span>
              <span className={styles.statLabel}>Mobile Apps</span>
            </div>
          </motion.div>

          <div className={styles.glow}></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
