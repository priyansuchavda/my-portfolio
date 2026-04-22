import Image from 'next/image';
import styles from './CaseStudy.module.css';

const CaseStudy = () => {
  return (
    <section className={styles.caseStudySection}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag}>Case Study</span>
          <h2 className={styles.title}>Real-time Esports Intelligence</h2>
          <div className={styles.content}>
            <h3>The Problem</h3>
            <p>
              Esports fans often struggle to find comprehensive, real-time statistics and match updates 
              across different platforms, missing out on critical performance insights.
            </p>
            <h3>The Solution</h3>
            <p>
              I developed 16Score — a unified esports companion that delivers ultra-fast live updates 
              and deep player analytics, ensuring fans never miss a beat of the action.
            </p>
          </div>
          <button className="btn btn-primary">Read Full Story</button>
        </div>
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/case-study.png" 
              alt="Case Study Screens" 
              width={600} 
              height={500}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
